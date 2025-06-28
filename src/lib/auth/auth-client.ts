import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: import.meta.env.VERCEL_URL || "http://localhost:3000",
    redirectTo: "/"
})