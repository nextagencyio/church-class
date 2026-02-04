import { motion } from 'framer-motion'
import { Slide, fadeUp, stagger, slideFromLeft, slideFromRight } from '../components/Slide'

export function JoysAndConcernsSlide() {
  const joys = [
    'Their disciplined faith',
    'Their firmness in Christ',
    'Unity and love among them',
  ]

  const concerns = [
    'Deception by fine-sounding arguments',
    'Being led astray from the truth',
    'Forgetting Christ is the center',
  ]

  return (
    <Slide variant="default">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Paul's Heart for the Colossians
          </h2>
          <p className="text-lg text-white/60">From verses 1-5</p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Joys */}
          <motion.div
            variants={slideFromLeft}
            custom={0.2}
            className="bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">😊</span>
              <h3 className="text-2xl font-bold text-emerald-400">His Joys</h3>
            </div>
            <motion.ul variants={stagger} className="space-y-4">
              {joys.map((joy, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  custom={0.3 + index * 0.1}
                  className="flex items-start gap-3 text-lg text-white/90"
                >
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>{joy}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Concerns */}
          <motion.div
            variants={slideFromRight}
            custom={0.2}
            className="bg-amber-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚠️</span>
              <h3 className="text-2xl font-bold text-amber-400">His Concerns</h3>
            </div>
            <motion.ul variants={stagger} className="space-y-4">
              {concerns.map((concern, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  custom={0.3 + index * 0.1}
                  className="flex items-start gap-3 text-lg text-white/90"
                >
                  <span className="text-amber-400 mt-1">!</span>
                  <span>{concern}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Discussion prompt */}
        <motion.div
          variants={fadeUp}
          custom={0.7}
          className="mt-10 text-center"
        >
          <p className="text-white/50 text-lg">
            <span className="text-gold-400">Discussion:</span> On the "map" of your life, what were the signposts that led you to Christ?
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
