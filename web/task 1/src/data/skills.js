import { Code2, Layout, Server, Database } from 'lucide-react'

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML5 & CSS3'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'Django', 'REST APIs', 'GraphQL'],
  },
  {
    id: 'database-devops',
    title: 'Database & DevOps',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git & CI/CD'],
  },
]
