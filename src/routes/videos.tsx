import { createFileRoute, redirect } from "@tanstack/react-router";
import { UploadButton } from "@/components/uploadthing";
import { getUser } from "@/lib/auth/auth-server";

export const Route = createFileRoute("/videos")({
  component: VideosPage,
  beforeLoad: async () => {
    const user = await getUser()
    return { user }
  },
  loader: async ({ context }) => {
    if (!context.user) {
      throw redirect({ to: "/" })
    }
    return { user: context.user }
  },
});

function VideosPage() {
  const { user } = Route.useLoaderData()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Videos of {user.name}</h1>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files uploaded:", res);
          }}
          onUploadError={(error: Error) => {
            console.error("Upload error:", error);
          }}
        />
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p className="text-muted-foreground">
            Your video content will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
