import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from '@/lib/auth/auth-client'

export default function Header() {
  const { data: session, isPending } = useSession()

  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/start/server-funcs">Start - Server Functions</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/start/api-request">Start - API Request</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/sentry/testing">Sentry</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/tanstack-query">TanStack Query</Link>
        </div>
      </nav>
      
      <div className="flex items-center gap-2">
        {!isPending && (
          <>
            {session?.user ? (
              <Button 
                onClick={() => signOut()} 
                variant="outline"
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                onClick={() => signIn.social({ provider: "github" })}
              >
                Sign In
              </Button>
            )}
          </>
        )}
      </div>
    </header>
  )
}
