import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const highlights = [
  'Building scalable REST & GraphQL APIs',
  'Designing accessible, responsive interfaces',
  'Optimizing performance & Core Web Vitals',
  'Writing maintainable, well-tested code',
  'Mentoring junior developers & pairing',
  'Shipping features in agile, cross-functional teams',
]

const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Brightloop Software',
    period: '2023 — Present',
    description:
      'Lead development of a design system used across six product teams, cutting new feature build time by 30%. Mentor two junior engineers and drive frontend architecture decisions.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Nimbus Labs',
    period: '2021 — 2023',
    description:
      'Built and maintained customer-facing dashboards and internal tooling using React and Node.js. Migrated a legacy monolith to a service-oriented architecture on AWS.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Pixel & Pine Studio',
    period: '2019 — 2021',
    description:
      'Delivered marketing sites and e-commerce storefronts for small business clients, working directly with designers to translate mockups into pixel-accurate, responsive code.',
  },
]

export default function About() {
  return (
    <section className="container-base section-padding">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-slate-dark dark:text-slate-light"
          >
            <p>
              Hello! I&rsquo;m Layan, a full-stack developer based in Austin,
              Texas, with a passion for crafting products that are fast,
              accessible, and enjoyable to use. My interest in building for the
              web started back in 2018 when I customized a WordPress theme for
              a friend&rsquo;s small business &mdash; turns out tweaking
              someone else&rsquo;s CSS taught me more than any tutorial could.
            </p>
            <p>
              Fast-forward to today, and I&rsquo;ve had the privilege of
              working at a design studio, a fast-moving startup, and now a
              growing software company, building everything from marketing
              sites to internal tooling used by hundreds of engineers.
            </p>
            <p>
              My main focus these days is building accessible, inclusive
              products and digital experiences at{' '}
              <span className="font-medium text-navy dark:text-slate-lightest">
                Brightloop Software
              </span>{' '}
              for a variety of clients. I also recently started
              contributing to open-source projects and enjoy writing about
              what I learn along the way.
            </p>
            <p>Here are a few technologies I&rsquo;ve been working with recently:</p>

            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 pt-2 font-mono text-sm sm:grid-cols-2">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 text-teal">&#9656;</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a href="/resume.pdf" download className="btn-primary">
                <Download size={16} />
                Download résumé
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative mx-auto h-64 w-64 shrink-0 sm:h-80 sm:w-80 lg:h-full lg:w-full"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border-2 border-teal transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-navy-light font-mono text-6xl text-teal">
            LA
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <h3 className="mb-10 text-xl font-semibold text-navy dark:text-slate-lightest">
          Experience
        </h3>

        <div className="space-y-10 border-l border-slate-dark/20 pl-8 dark:border-slate-lightest/10">
          {experience.map((job, index) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-teal bg-white dark:bg-navy" />
              <p className="font-mono text-xs text-teal">{job.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-navy dark:text-slate-lightest">
                {job.role} &middot; {job.company}
              </h4>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-dark dark:text-slate-light">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
