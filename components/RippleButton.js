'use client'

export default function RippleButton({ children, className = '', as = 'button', href, onClick }) {
  const handleClick = (e) => {
    const btn = e.currentTarget
    const circle = document.createElement('span')
    const d = Math.max(btn.clientWidth, btn.clientHeight)
    const rect = btn.getBoundingClientRect()
    circle.style.width = circle.style.height = `${d}px`
    circle.style.left = `${e.clientX - rect.left - d / 2}px`
    circle.style.top = `${e.clientY - rect.top - d / 2}px`
    circle.className = 'absolute rounded-full bg-white/50 pointer-events-none animate-ripple'
    btn.appendChild(circle)
    setTimeout(() => circle.remove(), 650)
    if (onClick) onClick(e)
  }

  const classes = `relative overflow-hidden ${className}`

  if (as === 'a') {
    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  )
}
