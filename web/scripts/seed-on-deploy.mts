/**
 * Runs before `next build` (see package.json). On Vercel production builds it writes
 * starter content that is missing from Firestore and replaces placeholder lesson
 * bodies, so new lessons and tasks go live with the deploy. Edits made in the admin
 * panel are kept. Never fails the build: if Firestore is unreachable, the admin
 * overview still offers the "load starter content" button.
 */
if (process.env.VERCEL_ENV !== "production" || !process.env.FIREBASE_SERVICE_ACCOUNT) {
  console.log("seed-on-deploy: skipped (not a production build with Firebase credentials).");
  process.exit(0);
}
try {
  const { seedMissing } = await import("../server/admin/seed");
  const written = await seedMissing();
  console.log(`seed-on-deploy: wrote ${written} starter document(s).`);
} catch (err) {
  console.error("seed-on-deploy: failed, continuing the build.", err);
}
process.exit(0);
