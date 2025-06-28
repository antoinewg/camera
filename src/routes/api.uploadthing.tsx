import { createServerFileRoute } from "@tanstack/react-start/server";
import { uploadRouter } from "@/integrations/uploadthing/router";
import { createRouteHandler } from "uploadthing/server";

const handlers = createRouteHandler({ router: uploadRouter });

export const ServerRoute = createServerFileRoute("/api/uploadthing").methods({
  GET: handlers,
  POST: handlers,
});