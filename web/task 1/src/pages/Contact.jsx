import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { email as contactEmail, socials } from '../data/socials.js'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="container-base section-padding">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-teal">04. What&rsquo;s next?</p>
        <h1 className="text-3xl font-bold text-navy dark:text-slate-lightest sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-6 text-slate-dark dark:text-slate-light">
          I&rsquo;m currently open to new opportunities and interesting
          collaborations. Whether you have a question, a project in mind, or
          just want to say hi, my inbox is always open. Fill out the form
          below and it&rsquo;ll open a pre-filled email in your default mail
          client.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-3">
            <Mail size={20} className="mt-1 shrink-0 text-teal" />
            <div>
              <p className="text-sm font-medium text-navy dark:text-slate-lightest">Email</p>
              <a
                href={`mailto:${contactEmail}`}
                className="link-underline text-sm text-slate-dark dark:text-slate-light"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-1 shrink-0 text-teal" />
            <div>
              <p className="text-sm font-medium text-navy dark:text-slate-lightest">Location</p>
              <p className="text-sm text-slate-dark dark:text-slate-light">
                Austin, Texas, USA
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            {socials.map(({ id, label, href, icon: Icon }) => (
              <a
                key={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                aria-label={label}
                className="text-slate-dark transition-colors hover:text-teal dark:text-slate-light dark:hover:text-teal"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-xs text-slate-dark dark:text-slate-light"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full rounded border border-slate-dark/20 bg-transparent px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal dark:border-slate-lightest/15 dark:text-slate-lightest"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-xs text-slate-dark dark:text-slate-light"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full rounded border border-slate-dark/20 bg-transparent px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal dark:border-slate-lightest/15 dark:text-slate-lightest"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs text-slate-dark dark:text-slate-light"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Let's build something great together..."
              className="w-full resize-none rounded border border-slate-dark/20 bg-transparent px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal dark:border-slate-lightest/15 dark:text-slate-lightest"
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
            Send message
            <Send size={16} />
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
              className="font-mono text-sm text-teal"
            >
              Your email client should now be open with your message ready to send.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
