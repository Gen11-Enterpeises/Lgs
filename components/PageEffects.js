'use client'
import { useEffect, useState } from 'react'

export default function PageEffects() {
  const [loaded, setLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [glowPos, setGlowPos] = useState({ x: -400, y: -400, visible: false })

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600)

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setShowTop(y > 500)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (y / h) * 100 : 0)
    }
    const onMove = (e) => setGlowPos({ x: e.clientX - 170, y: e.clientY - 170, visible: true })
    const onLeave = () => setGlowPos((p) => ({ ...p, visible: false }))

    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      {/* Preloader */}
      <div
        className={`fixed inset-0 bg-white z-[10000] flex items-center justify-center transition-all duration-700 ${
          loaded ? 'opacity-0 invisible' : 'opacity-100 visible'
        }`}
      >
        <div className="text-2xl font-display font-extrabold tracking-tight animate-rise">
          Linga <span className="grad-text">Global</span> School
        </div>
      </div>

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-grad-2 z-[9999] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />

      {/* Cursor glow */}
      <div
        className="fixed w-[340px] h-[340px] rounded-full pointer-events-none z-[1] blur-[10px] transition-opacity duration-300 bg-grad-soft hidden md:block"
        style={{
          transform: `translate(${glowPos.x}px, ${glowPos.y}px)`,
          opacity: glowPos.visible ? 1 : 0,
        }}
      />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-7 right-7 w-[50px] h-[50px] rounded-full bg-grad-2 text-white flex items-center justify-center text-lg shadow-md2 z-[999] transition-all duration-400 hover:-translate-y-1.5 hover:scale-105 ${
          showTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
        }`}
      >
        ↑
      </button>

      {/* expose scrolled state to header via data attr trick is avoided; header handles its own scroll listener */}
    </>
  )
}
