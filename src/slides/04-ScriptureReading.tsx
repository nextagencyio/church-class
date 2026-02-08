import { motion } from 'framer-motion'
import { Slide, fadeUp, fadeIn } from '../components/Slide'

export function ScriptureReadingSlide() {
  return (
    <Slide variant="scripture">
      <div className="max-w-7xl mx-auto">
        {/* Reference */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-5xl md:text-6xl font-bold text-center text-gold-400 mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Colossians 2:1-7
        </motion.h2>

        {/* Scripture text with staggered reveal */}
        <motion.div
          variants={fadeIn}
          custom={0.2}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl text-white/90 leading-relaxed italic"
          >
            <sup className="text-gold-400/60 text-lg">1</sup> I want you to know how hard I am contending for you and for those at Laodicea, and for all who have not met me personally. <sup className="text-gold-400/60 text-lg">2</sup> My goal is that they may be encouraged in heart and united in love, so that they may have the full riches of complete understanding, in order that they may know the mystery of God, namely, Christ, <sup className="text-gold-400/60 text-lg">3</sup> <strong className="text-gold-300 not-italic text-glow-pulse">in whom are hidden all the treasures of wisdom and knowledge.</strong>
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="my-6 border-t border-white/10 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-3xl md:text-4xl text-white/90 leading-relaxed italic"
          >
            <sup className="text-gold-400/60 text-lg">4</sup> I tell you this so that no one may deceive you by fine-sounding arguments. <sup className="text-gold-400/60 text-lg">5</sup> For though I am absent from you in body, I am present with you in spirit and delight to see how disciplined you are and how firm your faith in Christ is.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="my-6 border-t border-white/10 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="text-3xl md:text-4xl text-white/90 leading-relaxed italic"
          >
            <sup className="text-gold-400/60 text-lg">6</sup> So then, just as you received Christ Jesus as Lord, continue to live your lives in him, <sup className="text-gold-400/60 text-lg">7</sup> <strong className="text-gold-300 not-italic text-glow-pulse">rooted and built up in him</strong>, strengthened in the faith as you were taught, and overflowing with thankfulness.
          </motion.p>
        </motion.div>
      </div>
    </Slide>
  )
}
