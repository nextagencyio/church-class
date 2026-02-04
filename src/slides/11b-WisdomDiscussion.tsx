import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn } from '../components/Slide'

export function WisdomDiscussionSlide() {
  return (
    <Slide variant="discussion">
      <div className="max-w-5xl mx-auto text-center">
        {/* Big discussion icon */}
        <motion.div
          variants={scaleIn}
          custom={0}
          className="mb-8"
        >
          <span className="text-8xl">✨</span>
        </motion.div>

        {/* Label */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/20 border border-gold-400/40 mb-8"
        >
          <span className="text-gold-400 text-lg font-semibold uppercase tracking-wider">Discussion Question</span>
        </motion.div>

        {/* Big question */}
        <motion.h2
          variants={fadeUp}
          custom={0.2}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          In what areas of your life
          <br />
          do you especially need the
          <br />
          <span className="text-gold-400">"wisdom and knowledge"</span>
          <br />
          of Christ?
        </motion.h2>

        {/* Decorative element */}
        <motion.div
          variants={scaleIn}
          custom={0.3}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-16 h-px bg-gold-400/30" />
          <span className="text-gold-400 text-2xl">✦</span>
          <div className="w-16 h-px bg-gold-400/30" />
        </motion.div>

      </div>
    </Slide>
  )
}
