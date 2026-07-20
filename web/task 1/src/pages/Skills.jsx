import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillBadge from '../components/SkillBadge.jsx'
import { skillCategories } from '../data/skills.js'

export default function Skills() {
  return (
    <section className="container-base section-padding">
      <SectionHeading>Skills &amp; Tools</SectionHeading>

      <p className="-mt-6 mb-14 max-w-2xl text-slate-dark dark:text-slate-light">
        A snapshot of the languages, frameworks, and tools I reach for most
        often when designing, building, and shipping software.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-lg border border-slate-dark/10 bg-white/60 p-6 dark:border-slate-lightest/10 dark:bg-navy-light/60"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal/10 text-teal">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-navy dark:text-slate-lightest">
                  {category.title}
                </h3>
              </div>

              <ul className="grid grid-cols-2 gap-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skill} skill={skill} index={skillIndex} />
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
