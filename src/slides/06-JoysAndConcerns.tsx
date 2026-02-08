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
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-10">
          <h2
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Paul's Heart for the Colossians
          </h2>
          <p className="text-2xl text-white/60">From verses 1-5</p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Joys */}
          <motion.div
            variants={slideFromLeft}
            custom={0.2}
            className="bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-10 border border-emerald-400/30"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">😊</span>
              <h3 className="text-4xl font-bold text-emerald-400">His Joys</h3>
            </div>
            <motion.ul variants={stagger} className="space-y-5">
              {joys.map((joy, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  custom={0.3 + index * 0.1}
                  className="flex items-start gap-4 text-2xl md:text-3xl text-white/90"
                >
                  <span className="text-emerald-400 mt-1 text-3xl">✓</span>
                  <span>{joy}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Concerns */}
          <motion.div
            variants={slideFromRight}
            custom={0.2}
            className="bg-amber-500/10 backdrop-blur-sm rounded-2xl p-10 border border-amber-400/30"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">⚠️</span>
              <h3 className="text-4xl font-bold text-amber-400">His Concerns</h3>
            </div>
            <motion.ul variants={stagger} className="space-y-5">
              {concerns.map((concern, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  custom={0.3 + index * 0.1}
                  className="flex items-start gap-4 text-2xl md:text-3xl text-white/90"
                >
                  <span className="text-amber-400 mt-1 text-3xl">!</span>
                  <span>{concern}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
