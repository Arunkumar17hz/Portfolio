import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { Reveal, RevealWords } from './Reveal'
import { profile } from '../data/content'

const contacts = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: 'Arunkumar17hz', href: profile.github },
  { icon: MessageCircle, label: 'WhatsApp', value: profile.whatsappNumber, href: profile.whatsapp },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Functional submit via the visitor's mail client (no backend required).
  // To use a hosted form instead, swap this for Formspree/EmailJS in production.
  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || 'Visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative section-pad py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-neon opacity-40" />
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="kicker mb-4">06 — Contact</div>
          <h2 className="heading-xl max-w-3xl text-[clamp(2rem,6vw,4rem)] text-snow">
            <RevealWords text="LET'S BUILD SOMETHING GREAT TOGETHER." />
          </h2>
          <p className="mt-5 max-w-xl text-mist">
            Have a project idea or an exciting opportunity? Let's connect and create something
            meaningful.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact cards */}
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {contacts.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="glass group flex items-center gap-3 rounded-2xl p-4 transition-colors hover:glass-neon"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-neon/10 text-neon transition-colors group-hover:bg-neon/20">
                    <c.icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-mist">
                      {c.label}
                    </div>
                    <div className="truncate font-display text-sm font-semibold text-snow">
                      {c.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass glass-neon rounded-3xl p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-mist">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-snow placeholder:text-mist/60 outline-none transition-colors focus:border-neon/50"
                />
              </div>

              <button type="submit" className="btn-primary mt-5 w-full justify-center">
                {sent ? <CheckCircle2 size={18} /> : <Send size={18} />}
                {sent ? 'Opening mail client…' : 'Send Message'}
              </button>
              <p className="mt-3 text-center font-mono text-[10px] text-mist/70">
                Secure mailto form · editable in src/data/content.js
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-mist">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-snow placeholder:text-mist/60 outline-none transition-colors focus:border-neon/50"
      />
    </div>
  )
}
