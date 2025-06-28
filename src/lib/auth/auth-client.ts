import { createAuthClient } from "better-auth/react";

export const { signIn, signOut, useSession, getSession } = createAuthClient({
  baseURL: process.env.VERCEL_URL || "http://localhost:3000",
  redirectTo: "/",
});
