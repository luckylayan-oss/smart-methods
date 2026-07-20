import { socials } from '../data/socials.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-dark/10 py-10 dark:border-slate-lightest/5">
      <div className="container-base flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-5">
          {socials.map(({ id, label, href, icon: Icon }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
              aria-label={label}
              className="text-slate-dark transition-colors hover:text-teal dark:text-slate-light dark:hover:text-teal"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-slate-dark dark:text-slate-light">
          Designed &amp; built by Layan Alghamdi &copy; {year}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
