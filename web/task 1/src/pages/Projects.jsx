import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="container-base section-padding">
      <SectionHeading>My Projects</SectionHeading>

      <p className="-mt-6 mb-14 max-w-2xl text-slate-dark dark:text-slate-light">
        A selection of things I&rsquo;ve built recently, ranging from
        full-stack applications to developer tooling. Each card links out to
        the source code and a live demo.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
