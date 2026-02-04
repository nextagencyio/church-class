import { motion } from 'framer-motion'
import { Slide, fadeUp, stagger, scaleIn } from '../components/Slide'

export function KingJesusSlide() {
  const points = [
    { emoji: '🗺️', text: 'He is the secret plan' },
    { emoji: '💎', text: 'He is the treasure' },
    { emoji: '🛡️', text: 'In him they can ward off danger' },
    { emoji: '🎯', text: 'In him they find their way to the goal' },
  ]

  return (
    <Slide variant="default">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Theme Throughout:
            <br />
            <span className="text-gold-400">King Jesus</span>
          </h2>
          <p className="text-xl text-white/60">Paul's answer to every question</p>
        </motion.div>

        {/* Points grid */}
        <motion.div
          variants={stagger}
          className="grid md:grid-cols-2 gap-6"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              custom={0.1 + index * 0.1}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl">{point.emoji}</span>
              <p className="text-xl md:text-2xl text-white/90">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key insight */}
        <motion.div
          variants={fadeUp}
          custom={0.6}
          className="mt-12 text-center"
        >
          <p className="text-lg md:text-xl text-gold-300 italic max-w-3xl mx-auto">
            "The treasure that was hidden, to which the map would lead them,
            <br />
            was <strong>Jesus Christ himself</strong>."
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
