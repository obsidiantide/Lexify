import "server-only";
import { seedDocuments } from "@/content/seed-docs";
import { db } from "@/server/firebase-admin";

/** Bodies the first starter set shipped with; a lesson still holding one has never been edited. */
const PLACEHOLDER_BODY = /^## Placeholder lesson\n/;

/**
 * The starter documents that still need writing: missing ones, plus lesson
 * bodies that still hold the original placeholder text, so later starter
 * lessons reach databases seeded earlier. Everything else (admin edits) is kept.
 */
async function pendingSeed() {
  const docs = seedDocuments().map(([path, data]) => [db().doc(path), data] as const);
  const snaps = new Map((await db().getAll(...docs.map(([ref]) => ref))).map((s) => [s.ref.path, s]));
  return docs.filter(([ref]) => {
    const snap = snaps.get(ref.path);
    if (!snap?.exists) return true;
    const body: unknown = ref.parent.id === "lessonBodies" ? snap.get("body") : undefined;
    return typeof body === "string" && PLACEHOLDER_BODY.test(body);
  });
}

/** True while some starter content is missing or still a placeholder. */
export async function needsSeed(): Promise<boolean> {
  return (await pendingSeed()).length > 0;
}

/** Writes the pending starter documents and returns how many were written. */
export async function seedMissing(): Promise<number> {
  const pending = await pendingSeed();
  if (pending.length === 0) return 0;
  const batch = db().batch();
  for (const [ref, data] of pending) batch.set(ref, data);
  await batch.commit();
  return pending.length;
}
