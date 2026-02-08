import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn } from '../components/Slide'

export function OpeningQuestionSlide() {
  return (
    <Slide variant="discussion">
      <div className="max-w-7xl mx-auto text-center">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-400/30 mb-8"
        >
          <span className="text-amber-400 text-xl font-semibold uppercase tracking-wider">Opening Discussion</span>
        </motion.div>

        {/* Question icon */}
        <motion.div
          variants={scaleIn}
          custom={0.1}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400/20 to-amber-500/20 border border-gold-400/30 flex items-center justify-center mx-auto mb-8"
        >
          <span className="text-5xl">💎</span>
        </motion.div>

        {/* Main question */}
        <motion.h2
          variants={fadeUp}
          custom={0.2}
          className="text-5xl md:text-7xl font-bold mb-8 text-white"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          What is the most valuable thing
          <br />
          <span className="text-gold-400">you have ever found?</span>
        </motion.h2>

        {/* Sub-questions */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          className="space-y-5 text-3xl md:text-4xl text-white/70"
        >
          <p>What did you do with what you found?</p>
          <p>Who did you tell?</p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="w-3 h-3 rounded-full bg-gold-400/50" />
          <div className="w-3 h-3 rounded-full bg-gold-400/30" />
          <div className="w-3 h-3 rounded-full bg-gold-400/20" />
        </motion.div>
      </div>
    </Slide>
  )
}
