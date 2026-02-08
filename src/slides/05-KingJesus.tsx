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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-10">
          <h2
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Theme Throughout:
            <br />
            <span className="text-shimmer">King Jesus</span>
          </h2>
          <p className="text-3xl text-white/60">Paul's answer to every question</p>
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
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 flex items-center gap-6 hover:bg-white/10 hover:border-gold-400/30 cursor-default"
            >
              <motion.span
                className="text-5xl"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {point.emoji}
              </motion.span>
              <p className="text-3xl md:text-4xl text-white/90">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key insight */}
        <motion.div
          variants={fadeUp}
          custom={0.6}
          className="mt-10 text-center"
        >
          <p className="text-2xl md:text-3xl text-gold-300 italic max-w-4xl mx-auto">
            "The treasure that was hidden, to which the map would lead them,
            <br />
            was <strong>Jesus Christ himself</strong>."
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
