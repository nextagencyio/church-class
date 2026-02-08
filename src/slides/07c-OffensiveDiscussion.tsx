import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn } from '../components/Slide'

export function OffensiveDiscussionSlide() {
  return (
    <Slide variant="discussion">
      <div className="max-w-5xl mx-auto text-center">
        {/* Big discussion icon with pulse animation */}
        <motion.div
          variants={scaleIn}
          custom={0}
          className="mb-8"
        >
          <motion.span
            className="text-8xl inline-block"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🤔
          </motion.span>
        </motion.div>

        {/* Label */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/20 border border-gold-400/40 mb-8"
        >
          <span className="text-gold-400 text-xl font-semibold uppercase tracking-wider">Discussion Question</span>
        </motion.div>

        {/* Big question */}
        <motion.h2
          variants={fadeUp}
          custom={0.2}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          If the <span className="text-gold-400">centrality of Christ</span>
          <br />
          has not been a problem for you,
          <br />
          why do you think <span className="text-gold-400">other people</span>
          <br />
          find it offensive?
        </motion.h2>

        {/* Decorative element */}
        <motion.div
          variants={scaleIn}
          custom={0.3}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-16 h-px bg-gold-400/30" />
          <span className="text-gold-400 text-3xl">✦</span>
          <div className="w-16 h-px bg-gold-400/30" />
        </motion.div>

      </div>
    </Slide>
  )
}
