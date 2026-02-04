import { motion } from 'framer-motion'
import { Slide, fadeUp, stagger, scaleIn } from '../components/Slide'

export function PlausibleLiesSlide() {
  const protections = [
    { icon: '❤️', title: 'Encouraged hearts', desc: 'Being strengthened inwardly' },
    { icon: '🤝', title: 'United in love', desc: 'Community and fellowship' },
    { icon: '💡', title: 'Full riches of understanding', desc: 'Deep knowledge of Christ' },
  ]

  return (
    <Slide variant="discussion">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-400/30 mb-6">
            <span className="text-amber-400 text-base font-semibold uppercase tracking-wider">⚠️ Warning</span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Beware of
            <br />
            <span className="text-amber-400">"Plausible Words"</span>
          </h2>
        </motion.div>

        {/* Context */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          className="bg-white/5 rounded-xl p-8 mb-8 border border-white/10"
        >
          <p className="text-xl md:text-2xl text-white/80 text-center leading-relaxed">
            Paul indicates that people are quite likely to try to <strong className="text-white">deceive</strong> new Christians
            with arguments that sound plausible but are in fact designed to lead them astray.
          </p>
        </motion.div>

        {/* Protection */}
        <motion.div variants={fadeUp} custom={0.3} className="mb-8">
          <h3 className="text-2xl text-center text-gold-400 mb-6 font-semibold">
            What protects us? (vv. 2-5)
          </h3>
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {protections.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                custom={0.4 + index * 0.1}
                className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-400/20 text-center"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h4 className="text-xl font-bold text-emerald-400 mb-2">{item.title}</h4>
                <p className="text-lg text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Military metaphor */}
        <motion.div
          variants={fadeUp}
          custom={0.7}
          className="bg-indigo-500/10 rounded-xl p-8 border border-indigo-400/20"
        >
          <p className="text-xl text-white/80 text-center">
            <span className="text-4xl mr-3">🛡️</span>
            Paul uses military language: <strong className="text-indigo-300">"good order"</strong> and{' '}
            <strong className="text-indigo-300">"solidity"</strong> — like a formation ready to defend.
            <br />
            <em className="text-white/60">They mustn't be caught off their guard.</em>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
