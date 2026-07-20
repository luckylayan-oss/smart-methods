import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export const email = 'layan.alghamdi.dev@example.com'

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/layanalghamdi-dev',
    icon: Github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/layanalghamdi-dev',
    icon: Linkedin,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/layanalghamdidev',
    icon: Twitter,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${email}`,
    icon: Mail,
  },
]
