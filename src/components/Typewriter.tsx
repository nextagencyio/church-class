import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function Typewriter({ text, className = '', delay = 0, speed = 0.05 }: TypewriterProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
