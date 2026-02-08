import { motion } from 'framer-motion'
import { Slide, fadeUp, fadeIn, scaleIn } from '../components/Slide'
import { LottieAnimation } from '../components/LottieAnimation'
import { FloatingParticles } from '../components/FloatingParticles'
import { Typewriter } from '../components/Typewriter'

export function TitleSlide() {
  return (
    <Slide variant="title" className="relative overflow-hidden">
      {/* Floating gold particles */}
      <FloatingParticles count={25} />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={fadeIn}
          custom={0.5}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={fadeIn}
          custom={0.7}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* Custom glow animation - positioned at bottom */}
      <motion.div
        variants={fadeIn}
        custom={0.3}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none z-0"
      >
        <LottieAnimation
          src="/animations/glow-pulse.json"
          style={{ width: 300, height: 300 }}
          speed={0.5}
        />
      </motion.div>

      <div className="relative z-20 text-center max-w-7xl">
        {/* Chapter indicator */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="text-gold-400 text-lg font-semibold tracking-wide">CHAPTER 3</span>
        </motion.div>

        {/* Custom sparkle animation */}
        <motion.div
          variants={scaleIn}
          custom={0.1}
          className="mb-4"
        >
          <LottieAnimation
            src="/animations/sparkle.json"
            style={{ width: 100, height: 100, margin: '0 auto' }}
            speed={0.8}
          />
        </motion.div>

        {/* Main title with text shadow for readability */}
        <motion.h1
          variants={fadeUp}
          custom={0.15}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: '0 2px 20px rgba(0,0,0,0.5)'
          }}
        >
          <span className="text-white">God's Treasure</span>
          <br />
          <span className="text-shimmer" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}>Revealed</span>
        </motion.h1>

        {/* Scripture reference */}
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-4xl md:text-5xl text-white/70 mb-10"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
        >
          Colossians 2:1-7
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          variants={scaleIn}
          custom={0.3}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400/50" />
          <span className="text-gold-400 text-3xl">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400/50" />
        </motion.div>

        {/* Subtitle/Theme with typewriter effect */}
        <p
          className="text-2xl md:text-3xl text-white/70 italic max-w-4xl mx-auto"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
        >
          <Typewriter
            text={'"In Christ are hidden all the treasures of wisdom and knowledge"'}
            delay={1.2}
            speed={0.08}
          />
        </p>
      </div>
    </Slide>
  )
}
