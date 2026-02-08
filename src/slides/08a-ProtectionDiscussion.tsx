import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn } from '../components/Slide'

export function ProtectionDiscussionSlide() {
  return (
    <Slide variant="discussion">
      <div className="max-w-6xl mx-auto text-center">
        {/* Big discussion icon */}
        <motion.div
          variants={scaleIn}
          custom={0}
          className="mb-8"
        >
          <motion.span
            className="text-8xl inline-block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🛡️
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

        {/* Context */}
        <motion.p
          variants={fadeUp}
          custom={0.15}
          className="text-3xl text-white/60 mb-6 italic"
        >
          Paul warns about "plausible words" designed to deceive...
        </motion.p>

        {/* Big question */}
        <motion.h2
          variants={fadeUp}
          custom={0.2}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          What would <span className="text-gold-400">protect</span>
          <br />
          the Colossians
          <br />
          from these lies?
        </motion.h2>

        {/* Scripture reference */}
        <motion.p
          variants={fadeUp}
          custom={0.25}
          className="text-3xl text-white/50"
        >
          (vv. 2-5)
        </motion.p>

        {/* Decorative element */}
        <motion.div
          variants={scaleIn}
          custom={0.3}
          className="flex items-center justify-center gap-4 mt-6"
        >
          <div className="w-16 h-px bg-gold-400/30" />
          <span className="text-gold-400 text-3xl">✦</span>
          <div className="w-16 h-px bg-gold-400/30" />
        </motion.div>

      </div>
    </Slide>
  )
}
