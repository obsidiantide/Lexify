/**
 * Vercel's functions load firebase-admin without require(esm) support, so every
 * server dependency must load with it switched off. jwks-rsa 4 requires the
 * ESM-only jose 6, which broke sign-in in production; package.json overrides it.
 */
import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

describe("server runtime", () => {
  it.each(["firebase-admin/app", "firebase-admin/auth", "firebase-admin/firestore", "firebase-admin/storage"])("loads %s without require(esm)", (mod) => {
    const run = () => execFileSync(process.execPath, ["--no-experimental-require-module", "-e", `require(${JSON.stringify(mod)})`], { stdio: "pipe" });
    expect(run).not.toThrow();
  });
});
