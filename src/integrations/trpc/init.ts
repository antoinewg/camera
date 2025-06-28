import { auth } from "@/lib/auth/auth";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

export const createContext = async (opts: any) => {
  const session = await auth.api.getSession({
    headers: opts.req.headers,
  });
  return { session };
};

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next();
});
