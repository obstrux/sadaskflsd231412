import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const runtime = 'edge'

export default function NotFound() {
  return (
    <div className="flex min-h-70 flex-col items-center justify-center">
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Page not found
      </h1>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="mt-4 cursor-pointer">
        <Button variant="secondary" className="cursor-pointer">
          Go back home
        </Button>
      </Link>
    </div>
  )
}