import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/nav.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 shadow-lg shadow-navy/5 backdrop-blur-md dark:bg-navy/80 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-base flex h-16 items-center justify-between sm:h-20">
        <NavLink
          to="/"
          className="font-mono text-lg font-semibold text-navy dark:text-slate-lightest"
          aria-label="Layan Alghamdi — home"
        >
          <span className="text-teal">&lt;</span>LA
          <span className="text-teal">/&gt;</span>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-mono text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-teal'
                      : 'text-slate-dark hover:text-teal dark:text-slate-light dark:hover:text-teal'
                  }`
                }
              >
                <span className="text-teal">0{index + 1}.</span> {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href="mailto:layan.alghamdi.dev@example.com"
            className="btn-primary !py-2 !text-xs"
          >
            Say hello
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center text-navy dark:text-slate-lightest"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-dark/10 bg-white dark:border-slate-lightest/5 dark:bg-navy-light md:hidden"
          >
            <ul className="container-base flex flex-col gap-1 py-4">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded px-3 py-3 font-mono text-sm transition-colors ${
                        isActive
                          ? 'text-teal'
                          : 'text-slate-dark hover:text-teal dark:text-slate-light dark:hover:text-teal'
                      }`
                    }
                  >
                    <span className="text-teal">0{index + 1}.</span> {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
