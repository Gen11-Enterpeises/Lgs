'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import RippleButton from './RippleButton'

const info = [
  { icon: '📍', title: 'Address', text: 'Anand Nagar, Krishnankoil-626 126, Srivilliputhur (T.K), Virudhunagar (Dt), Tamil Nadu, India' },
  { icon: '✉️', title: 'Email', text: 'info@lingaschool.org' },
  { icon: '📞', title: 'Phone', text: '+91 7373727290' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', student: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="bg-fog py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Reveal variant="reveal-left">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Contact</span>
          <h2 className="font-display text-[32px] font-extrabold tracking-tight mb-6">Get in Touch</h2>
          <div className="bg-white rounded-[26px] p-10 shadow-sm2">
            {info.map((it) => (
              <div key={it.title} className="group flex gap-4 items-start mb-6 last:mb-0">
                <div className="w-[46px] h-[46px] rounded-2xl bg-grad-2 text-white flex items-center justify-center text-lg flex-shrink-0 shadow-md2 transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-6">
                  {it.icon}
                </div>
                <div>
                  <h5 className="text-[14.5px] font-bold mb-1">{it.title}</h5>
                  <p className="text-[13.5px] text-ash leading-relaxed">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="reveal-right" className="bg-white rounded-[26px] p-10 shadow-sm2">
          <form onSubmit={submit}>
            <div className="mb-4.5 mb-[18px]">
              <input
                value={form.name}
                onChange={update('name')}
                type="text"
                placeholder="Parent's Full Name"
                className="w-full px-4 py-3.5 rounded-2xl border border-line bg-mist text-sm transition-all focus:outline-none focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,138,61,0.12)]"
              />
            </div>
            <div className="mb-4.5 mb-[18px]">
              <input
                value={form.student}
                onChange={update('student')}
                type="text"
                placeholder="Student's Name & Grade Applying For"
                className="w-full px-4 py-3.5 rounded-2xl border border-line bg-mist text-sm transition-all focus:outline-none focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,138,61,0.12)]"
              />
            </div>
            <div className="mb-4.5 mb-[18px]">
              <input
                value={form.phone}
                onChange={update('phone')}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3.5 rounded-2xl border border-line bg-mist text-sm transition-all focus:outline-none focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,138,61,0.12)]"
              />
            </div>
            <div className="mb-4.5 mb-[18px]">
              <input
                value={form.email}
                onChange={update('email')}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3.5 rounded-2xl border border-line bg-mist text-sm transition-all focus:outline-none focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,138,61,0.12)]"
              />
            </div>
            <div className="mb-4.5 mb-[18px]">
              <textarea
                value={form.message}
                onChange={update('message')}
                placeholder="Your Message"
                className="w-full px-4 py-3.5 rounded-2xl border border-line bg-mist text-sm min-h-[110px] resize-y transition-all focus:outline-none focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,138,61,0.12)]"
              />
            </div>
            <RippleButton
              as="button"
              className="w-full bg-grad-2 text-white py-4 rounded-2xl font-semibold text-[15px] shadow-md2 transition-all duration-400 hover:-translate-y-1"
            >
              {sent ? 'Enquiry Sent ✓' : 'Send Enquiry'}
            </RippleButton>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
