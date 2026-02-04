import { motion } from 'framer-motion'
import { Slide, fadeUp, stagger, scaleIn } from '../components/Slide'
import { LottieAnimation } from '../components/LottieAnimation'

export function ThreeWordPicturesSlide() {
  const pictures = [
    {
      lottie: '/animations/journey-path.json',
      emoji: '🚶‍♂️',
      title: 'A Journey',
      verse: '"just as you received... continue to live"',
      description: 'Life with Christ is an ongoing walk, not a one-time decision',
      question: 'How has your journey with Christ unfolded?',
      useLottie: true,
    },
    {
      lottie: '/animations/tree-roots.json',
      emoji: '🌳',
      title: 'Healthy Roots',
      verse: '"rooted... in him"',
      description: 'Deep roots provide stability and nourishment',
      question: 'What helps you develop deeper roots?',
      useLottie: true,
    },
    {
      lottie: '/animations/building.json',
      emoji: '🏗️',
      title: 'A Building',
      verse: '"built up in him"',
      description: 'Ongoing construction, being built up day by day',
      question: 'In what ways is your life still "under construction"?',
      useLottie: true,
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
              {/* Icon - Lottie or Emoji */}
              <div className="h-24 mb-3 flex items-center justify-center">
                {item.useLottie ? (
                  <LottieAnimation
                    src={item.lottie}
                    style={{ width: 90, height: 90 }}
                    speed={0.7}
                  />
                ) : (
                  <span className="text-7xl">{item.emoji}</span>
                )}
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
