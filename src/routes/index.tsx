import { useSession } from '@/lib/auth/auth-client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data } = useSession()
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
