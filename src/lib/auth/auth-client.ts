import { createAuthClient } from "better-auth/react";

export const { signIn, signOut, useSession } = createAuthClient({
  baseURL: import.meta.env.VERCEL_URL || "http://localhost:3000",
  redirectTo: "/",
});
