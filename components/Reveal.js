'use client'
import useReveal from './useReveal'

export default function Reveal({ as = 'div', className = '', variant = 'reveal', children }) {
  const ref = useReveal()
  const Tag = as
  return (
    <Tag ref={ref} className={`${variant} ${className}`}>
      {children}
    </Tag>
  )
}
