import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects } from '../data/projects.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <>
      {/* Hero */}
      <section className="container-base flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="mb-5 font-mono text-teal">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight text-navy dark:text-slate-lightest sm:text-6xl lg:text-7xl"
          >
            Layan Alghamdi.
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-2 text-3xl font-bold leading-tight text-slate-dark dark:text-slate-light sm:text-5xl lg:text-6xl"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-dark dark:text-slate-light sm:text-lg"
          >
            I&rsquo;m a full-stack developer specializing in building accessible,
            performant digital experiences. I enjoy turning complex problems into
            simple, elegant interfaces &mdash; currently focused on building
            products that are fast, inclusive, and a little bit delightful.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="btn-primary">
              Check out my work
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="link-underline font-mono text-sm text-navy dark:text-slate-lightest"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 hidden justify-center sm:flex"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-slate-dark dark:text-slate-light"
          >
            <ChevronDown size={22} />
          </motion.span>
        </motion.div>
      </section>

      {/* Featured projects preview */}
      <section className="container-base section-padding">
        <SectionHeading>Featured Projects</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/projects" className="btn-primary">
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
