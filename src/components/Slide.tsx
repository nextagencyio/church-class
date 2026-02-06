import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'scripture' | 'discussion' | 'title'
}

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -60, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 60, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: delay + 0.2,
      ease: smoothEase,
    },
  }),
}

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const backgroundVariants = {
  default: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
  scripture: 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900',
  discussion: 'bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-900',
  title: 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950',
}

export function Slide({ children, className = '', variant = 'default' }: SlideProps) {
  return (
    <motion.div
      className={`w-full h-full flex flex-col items-center justify-center px-12 py-8 ${backgroundVariants[variant]} ${className}`}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

// Helper components for consistent styling - TV optimized sizes
export function SlideTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.h1
      variants={fadeUp}
      custom={0}
      className={`text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight ${className}`}
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      {children}
    </motion.h1>
  )
}

export function SlideSubtitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      variants={fadeUp}
      custom={0.1}
      className={`text-2xl md:text-3xl text-white/70 text-center max-w-5xl ${className}`}
    >
      {children}
    </motion.p>
  )
}

export function ScriptureVerse({ reference, children, className = '' }: { reference: string; children: ReactNode; className?: string }) {
  return (
    <motion.blockquote
      variants={fadeIn}
      custom={0.2}
      className={`max-w-6xl mx-auto ${className}`}
    >
      <p className="text-3xl md:text-4xl lg:text-5xl italic text-white/90 leading-relaxed text-center mb-6">
        "{children}"
      </p>
      <footer className="text-gold-400 text-xl md:text-2xl text-center font-semibold">
        — {reference}
      </footer>
    </motion.blockquote>
  )
}

export function BulletList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <motion.ul
      variants={stagger}
      className={`space-y-5 ${className}`}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={fadeUp}
          custom={0.1 * index}
          className="flex items-start gap-4 text-xl md:text-2xl text-white/80"
        >
          <span className="text-gold-400 mt-1.5">✦</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export function DiscussionQuestion({ number, children, className = '' }: { number: number; children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={0.1 * number}
      className={`flex items-start gap-5 ${className}`}
    >
      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-400 font-bold text-xl">
        {number}
      </span>
      <p className="text-xl md:text-2xl text-white/90 pt-2 leading-relaxed">{children}</p>
    </motion.div>
  )
}
