import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn } from '../components/Slide'

export function CenterOfRealitySlide() {
  return (
    <Slide variant="scripture">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-10">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Not Just <span className="text-white/50">One Option</span>
            <br />
            But the <span className="text-gold-400">Center of Reality</span>
          </h2>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What many think */}
          <motion.div
            variants={scaleIn}
            custom={0.2}
            className="bg-red-500/10 rounded-2xl p-8 border border-red-400/20"
          >
            <div className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-4">
              ✗ What Many Think Today
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              People need some kind of <em>spiritual experience</em>, and Jesus
              is one option among many who could supply it if they wanted.
            </p>
          </motion.div>

          {/* What Paul understood */}
          <motion.div
            variants={scaleIn}
            custom={0.3}
            className="bg-emerald-500/10 rounded-2xl p-8 border border-emerald-400/20"
          >
            <div className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
              ✓ What Paul Understood
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              King Jesus himself is the <strong className="text-white">center of the cosmos</strong>,
              the <strong className="text-white">key to life and the universe</strong>,
              the clue to genuinely human existence.
            </p>
          </motion.div>
        </div>

        {/* Key descriptors */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            'Center of the cosmos',
            'Key to life',
            'Image of the invisible God',
            'Clue to human existence',
          ].map((item, index) => (
            <motion.span
              key={index}
              variants={scaleIn}
              custom={0.5 + index * 0.1}
              className="px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* Discussion */}
        <motion.div
          variants={fadeUp}
          custom={0.8}
          className="bg-white/5 rounded-xl p-6 border border-white/10"
        >
          <p className="text-lg text-white/70 text-center">
            <span className="text-gold-400 font-semibold">Discussion:</span> Have you had difficulties with the idea that Jesus Christ is not one alternative way to have a spiritual experience but is the center of reality?
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
