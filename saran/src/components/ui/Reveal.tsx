import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Delay in seconds — use to stagger sibling reveals. */
  delay?: number
  /** Distance (px) the element travels up into place. */
  y?: number
  className?: string
  style?: CSSProperties
}

/**
 * Scroll-triggered reveal: fades and slides content up from below as it
 * enters the viewport. Animates once, uses only transform + opacity (compositor
 * friendly), and collapses to a plain fade when reduced motion is requested.
 */
export default function Reveal({ children, delay = 0, y = 40, className, style }: RevealProps) {
  const reduce = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
