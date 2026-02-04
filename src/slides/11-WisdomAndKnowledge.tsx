import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn, slideFromLeft, slideFromRight } from '../components/Slide'

export function WisdomAndKnowledgeSlide() {
  return (
    <Slide variant="scripture">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-10">
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Information vs.
            <br />
            <span className="text-gold-400">Wisdom & Knowledge</span>
          </h2>
        </motion.div>

        {/* Contrast boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={slideFromLeft}
            custom={0.2}
            className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">📚</span>
              <h3 className="text-2xl font-bold text-white/80">Information</h3>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                Mountains of data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                Libraries and the Internet
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                Facts without meaning
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                Endless but often empty
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideFromRight}
            custom={0.2}
            className="bg-gold-500/10 rounded-2xl p-8 border border-gold-400/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✨</span>
              <h3 className="text-2xl font-bold text-gold-400">Wisdom & Knowledge</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-gold-400">✦</span>
                Hidden treasures in Christ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400">✦</span>
                Understanding with purpose
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400">✦</span>
                Truth that transforms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400">✦</span>
                Connected to the source of all truth
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Key verse */}
        <motion.div
          variants={scaleIn}
          custom={0.5}
          className="bg-indigo-500/10 rounded-2xl p-8 border border-indigo-400/20 text-center"
        >
          <p className="text-xl md:text-2xl italic text-white/90 mb-4">
            "In Christ are hidden <strong className="text-gold-300 not-italic">all the treasures</strong> of wisdom and knowledge"
          </p>
          <p className="text-indigo-300">— Colossians 2:3</p>
        </motion.div>

        {/* Personal question */}
        <motion.div
          variants={fadeUp}
          custom={0.7}
          className="mt-8 text-center"
        >
          <p className="text-lg text-white/60">
            <span className="text-gold-400">💭</span> In what areas of your life do you especially need the "wisdom and knowledge" of Christ?
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
