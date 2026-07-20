import { motion } from 'framer-motion'

export default function SectionHeading({ children, className = '' }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`numbered-heading mb-12 ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="hidden h-px flex-1 bg-slate-dark/20 dark:bg-slate-lightest/10 sm:block"
      />
    </motion.h2>
  )
}
