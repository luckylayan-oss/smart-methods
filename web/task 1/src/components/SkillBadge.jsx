import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function SkillBadge({ skill, index = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="flex items-center gap-2 font-mono text-sm text-slate-dark dark:text-slate-light"
    >
      <CheckCircle2 size={15} className="shrink-0 text-teal" />
      {skill}
    </motion.li>
  )
}
