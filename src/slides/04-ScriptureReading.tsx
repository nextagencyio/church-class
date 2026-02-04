import { motion } from 'framer-motion'
import { Slide, fadeUp, fadeIn } from '../components/Slide'

export function ScriptureReadingSlide() {
  return (
    <Slide variant="scripture">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-base font-semibold uppercase tracking-wider">
            Scripture Reading
          </span>
        </motion.div>

        {/* Reference */}
        <motion.h2
          variants={fadeUp}
          custom={0.1}
          className="text-4xl md:text-5xl font-bold text-center text-gold-400 mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Colossians 2:1-7
        </motion.h2>

        {/* Scripture text */}
        <motion.div
          variants={fadeIn}
          custom={0.2}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10"
        >
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
            <sup className="text-gold-400/60 text-base">1</sup> I want you to know how hard I am contending for you and for those at Laodicea, and for all who have not met me personally. <sup className="text-gold-400/60 text-base">2</sup> My goal is that they may be encouraged in heart and united in love, so that they may have the full riches of complete understanding, in order that they may know the mystery of God, namely, Christ, <sup className="text-gold-400/60 text-base">3</sup> <strong className="text-gold-300 not-italic">in whom are hidden all the treasures of wisdom and knowledge.</strong>
          </p>

          <div className="my-6 border-t border-white/10" />

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
            <sup className="text-gold-400/60 text-base">4</sup> I tell you this so that no one may deceive you by fine-sounding arguments. <sup className="text-gold-400/60 text-base">5</sup> For though I am absent from you in body, I am present with you in spirit and delight to see how disciplined you are and how firm your faith in Christ is.
          </p>

          <div className="my-6 border-t border-white/10" />

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
            <sup className="text-gold-400/60 text-base">6</sup> So then, just as you received Christ Jesus as Lord, continue to live your lives in him, <sup className="text-gold-400/60 text-base">7</sup> <strong className="text-gold-300 not-italic">rooted and built up in him</strong>, strengthened in the faith as you were taught, and overflowing with thankfulness.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
