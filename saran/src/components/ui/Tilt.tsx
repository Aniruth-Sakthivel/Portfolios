import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

interface TiltProps {
  children: ReactNode
  className?: string
  /** Max rotation in degrees at the card edges. */
  max?: number
  /** Lift toward the viewer on hover (px). */
  lift?: number
  style?: React.CSSProperties
}

/**
 * Pointer-driven 3D tilt. Tracks the cursor over the element and maps it to
 * smooth rotateX / rotateY via springs, so motion eases in and settles
 * naturally instead of snapping. Honors prefers-reduced-motion.
 */
export default function Tilt({ children, className, max = 12, lift = 0, style }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  // Normalised pointer position, -0.5 → 0.5 across the element.
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const spring = { stiffness: 220, damping: 18, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring)
  const z = useSpring(0, spring)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }

  function reset() {
    px.set(0)
    py.set(0)
    z.set(0)
  }

  if (reduce) {
    return <div className={className} style={style}>{children}</div>
  }

  return (
    <div className="tilt-scene" style={{ height: style?.height }}>
      <motion.div
        ref={ref}
        className={`tilt-3d ${className ?? ''}`}
        onMouseMove={handleMove}
        onMouseEnter={() => z.set(lift)}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, translateZ: z, ...style }}
      >
        {children}
      </motion.div>
    </div>
  )
}
