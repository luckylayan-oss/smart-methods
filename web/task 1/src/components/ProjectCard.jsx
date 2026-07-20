import { motion } from 'framer-motion'
import { ExternalLink, Folder, Github } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, tags, github, live } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-lg border border-slate-dark/10 bg-white/60 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/5 dark:border-slate-lightest/10 dark:bg-navy-light/60 dark:hover:shadow-black/30"
    >
      <div className="mb-6 flex items-center justify-between">
        <Folder className="text-teal" size={36} strokeWidth={1.5} />
        <div className="flex items-center gap-4 text-slate-dark dark:text-slate-light">
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View ${title} source code on GitHub`}
            className="transition-colors hover:text-teal"
          >
            <Github size={20} />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View ${title} live demo`}
            className="transition-colors hover:text-teal"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className="mb-3 text-lg font-semibold text-navy transition-colors group-hover:text-teal dark:text-slate-lightest">
        {title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-dark dark:text-slate-light">
        {description}
      </p>

      <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate-dark dark:text-slate-light">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </motion.article>
  )
}
