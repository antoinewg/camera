import { env } from "@/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "../db/schema"
import { db } from "../db";
import { reactStartCookies } from "better-auth/react-start"

export const auth = betterAuth({
    socialProviders: {
        github: { 
            clientId: env.GITHUB_CLIENT_ID!,
            clientSecret: env.GITHUB_CLIENT_SECRET!,
        }, 
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: schema.user,
            account: schema.account,
            session: schema.session,
            verification: schema.verification,
        },
    }),
    plugins: [reactStartCookies()]
})