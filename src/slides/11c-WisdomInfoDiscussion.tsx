import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn } from '../components/Slide'

export function WisdomInfoDiscussionSlide() {
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
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            📚
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
          "In libraries and on the Internet there are mountains of information..."
        </motion.p>

        {/* Big question */}
        <motion.h2
          variants={fadeUp}
          custom={0.2}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          How might Paul understand
          <br />
          the <span className="text-gold-400">difference</span> between
          <br />
          <span className="text-slate-400">information</span> on one hand,
          <br />
          and <span className="text-gold-400">wisdom & knowledge</span> on the other?
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
