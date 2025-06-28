import { env } from "@/env";
import { betterAuth } from "better-auth";
 
export const auth = betterAuth({
    socialProviders: {
        github: { 
            clientId: env.GITHUB_CLIENT_ID!,
            clientSecret: env.GITHUB_CLIENT_SECRET!,
        }, 
    },
})