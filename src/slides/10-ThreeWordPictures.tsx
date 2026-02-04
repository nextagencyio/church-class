import { motion } from 'framer-motion'
import { Slide, fadeUp, stagger, scaleIn } from '../components/Slide'

// SVG Icons
const JourneyIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 56 C20 48, 24 32, 32 32 S44 48, 56 40" className="text-gold-400" strokeLinecap="round" />
    <circle cx="12" cy="52" r="3" className="fill-gold-400 stroke-none" />
    <circle cx="32" cy="32" r="3" className="fill-gold-400 stroke-none" />
    <circle cx="52" cy="44" r="3" className="fill-gold-400 stroke-none" />
    <path d="M52 38 L56 44 L50 44" className="text-gold-400 fill-gold-400" />
  </svg>
)

const RootsIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="32" cy="16" rx="16" ry="12" className="fill-emerald-500/80 stroke-emerald-600" />
    <line x1="32" y1="28" x2="32" y2="40" className="text-amber-700" strokeWidth="4" />
    <path d="M32 40 L20 56" className="text-amber-600" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 40 L32 58" className="text-amber-600" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 40 L44 56" className="text-amber-600" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 48 L16 54" className="text-amber-600" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M40 48 L48 54" className="text-amber-600" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const BuildingIcon = () => (
  <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="16" y="24" width="32" height="32" className="fill-slate-400/50 stroke-slate-500" />
    <polygon points="32,8 12,24 52,24" className="fill-amber-700/80 stroke-amber-800" />
    <rect x="26" y="40" width="12" height="16" className="fill-amber-900/80 stroke-amber-900" />
    <rect x="20" y="30" width="6" height="6" className="fill-sky-300/50 stroke-sky-400" />
    <rect x="38" y="30" width="6" height="6" className="fill-sky-300/50 stroke-sky-400" />
  </svg>
)

export function ThreeWordPicturesSlide() {
  const pictures = [
    {
      icon: <JourneyIcon />,
      title: 'A Journey',
      verse: '"just as you received... continue to live"',
      description: 'Life with Christ is an ongoing walk, not a one-time decision',
      question: 'How has your journey with Christ unfolded?',
    },
    {
      icon: <RootsIcon />,
      title: 'Healthy Roots',
      verse: '"rooted... in him"',
      description: 'Deep roots provide stability and nourishment',
      question: 'What helps you develop deeper roots?',
    },
    {
      icon: <BuildingIcon />,
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
          <p className="text-white/50 text-lg mb-2">Colossians 2:6-7</p>
          <h2
            className="text-4xl md:text-6xl font-bold"
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
              className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 flex flex-col"
            >
              {/* Icon */}
              <div className="h-24 mb-3 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gold-400 mb-2">{item.title}</h3>

              {/* Verse */}
              <p className="text-base text-indigo-300 italic mb-4">{item.verse}</p>

              {/* Description */}
              <p className="text-lg text-white/70 mb-6 flex-grow">{item.description}</p>

              {/* Question */}
              <div className="bg-white/5 rounded-lg p-4 border-l-2 border-gold-400">
                <p className="text-base text-white/80">
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
          <p className="text-xl text-white/60">
            <span className="text-gold-400 font-semibold">What do they have in common?</span>
            <br />
            All three describe <em>ongoing, living processes</em> — not static states
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
