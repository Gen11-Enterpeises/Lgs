'use client'
import { useEffect, useState } from 'react'
import RippleButton from './RippleButton'

const links = [
  { href: '#about', label: 'About' },
  { href: '#academics', label: 'Academics' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? 'bg-white/72 backdrop-blur-xl shadow-[0_1px_0_#e6e6ea] py-3' : 'py-[18px]'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight">
          <span className="w-[38px] h-[38px] rounded-[11px] bg-grad-2 flex items-center justify-center text-white font-extrabold text-sm shadow-md2 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
            LGS
          </span>
          Linga Global School
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[14.5px] font-medium opacity-85 hover:opacity-100 transition-opacity py-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-grad-2 after:rounded-full after:transition-[width] after:duration-400 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <RippleButton
            as="a"
            href="#admissions"
            className="bg-grad-2 text-white px-[22px] py-2.5 rounded-full text-sm font-semibold shadow-md2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Apply Now
          </RippleButton>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-ink transition-transform" />
          <span className="w-6 h-0.5 bg-ink" />
          <span className="w-6 h-0.5 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed top-[70px] right-5 bg-white p-6 rounded-2xl shadow-lg2 flex flex-col gap-4 z-[1500]">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-semibold">
              {l.label}
            </a>
          ))}
          <a href="#admissions" onClick={() => setOpen(false)} className="bg-grad-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center">
            Apply Now
          </a>
        </div>
      )}
    </header>
  )
}
