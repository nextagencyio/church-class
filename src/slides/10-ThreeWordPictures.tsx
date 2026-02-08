import { motion } from 'framer-motion'
import { Slide, fadeUp, stagger, scaleIn } from '../components/Slide'
import { Footprints, TreeDeciduous, Building2 } from 'lucide-react'

export function ThreeWordPicturesSlide() {
  const pictures = [
    {
      icon: <Footprints className="w-16 h-16 text-gold-400" strokeWidth={1.5} />,
      title: 'A Journey',
      verse: '"just as you received... continue to live"',
      description: 'Life with Christ is an ongoing walk, not a one-time decision',
      question: 'How has your journey with Christ unfolded?',
    },
    {
      icon: <TreeDeciduous className="w-16 h-16 text-emerald-400" strokeWidth={1.5} />,
      title: 'Healthy Roots',
      verse: '"rooted... in him"',
      description: 'Deep roots provide stability and nourishment',
      question: 'What helps you develop deeper roots?',
    },
    {
      icon: <Building2 className="w-16 h-16 text-sky-400" strokeWidth={1.5} />,
      title: 'A Building',
      verse: '"built up in him"',
      description: 'Ongoing construction, being built up day by day',
      question: 'In what ways is your life still "under construction"?',
    },
  ]

  return (
    <Slide variant="default">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-8">
          <p className="text-white/50 text-2xl mb-2">Colossians 2:6-7</p>
          <h2
            className="text-5xl md:text-7xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Three <span className="text-gold-400">Word-Pictures</span>
          </h2>
        </motion.div>

        {/* Three cards */}
        <motion.div
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {pictures.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              custom={0.2 + index * 0.15}
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(212, 175, 55, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-gold-400/30 flex flex-col cursor-default"
            >
              {/* Icon with hover animation */}
              <motion.div
                className="h-24 mb-3 flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{item.title}</h3>

              {/* Verse */}
              <p className="text-2xl text-indigo-300 italic mb-4">{item.verse}</p>

              {/* Description */}
              <p className="text-2xl text-white/70 mb-6 flex-grow">{item.description}</p>

              {/* Question */}
              <div className="bg-white/5 rounded-lg p-4 border-l-2 border-gold-400">
                <p className="text-2xl text-white/80">
                  <span className="text-gold-400">💭</span> {item.question}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What they share */}
        <motion.div
          variants={fadeUp}
          custom={0.7}
          className="mt-8 text-center"
        >
          <p className="text-2xl md:text-3xl text-white/60">
            <span className="text-gold-400 font-semibold">What do they have in common?</span>
            <br />
            All three describe <em>ongoing, living processes</em> — not static states
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
