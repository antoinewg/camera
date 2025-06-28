// import { TRPCError } from '@trpc/server'
import type { TRPCRouterRecord } from "@trpc/server";
// import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from "./init";

const peopleRouter = {
  username: protectedProcedure.query(async ({ ctx }) => ctx.session?.user.name),
} satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
  people: peopleRouter,
});
export type TRPCRouter = typeof trpcRouter;
