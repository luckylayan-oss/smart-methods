import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="container-base flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-teal">404</p>
      <h1 className="mt-4 text-3xl font-bold text-navy dark:text-slate-lightest sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-slate-dark dark:text-slate-light">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have been
        moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </section>
  )
}
