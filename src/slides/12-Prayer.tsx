import { motion } from 'framer-motion'
import { Slide, fadeUp, fadeIn, scaleIn } from '../components/Slide'
import { LottieAnimation } from '../components/LottieAnimation'
import { FloatingParticles } from '../components/FloatingParticles'

export function PrayerSlide() {
  return (
    <Slide variant="title" className="relative overflow-hidden">
      {/* Floating gold particles */}
      <FloatingParticles count={20} />

      {/* Background glow */}
      <motion.div
        variants={fadeIn}
        custom={0.5}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Custom glow animation - moved lower and more subtle */}
      <motion.div
        variants={fadeIn}
        custom={0.3}
        className="absolute inset-0 flex items-end justify-center opacity-10 pointer-events-none"
        style={{ paddingBottom: '15%' }}
      >
        <LottieAnimation
          src="/animations/glow-pulse.json"
          style={{ width: 350, height: 350 }}
          speed={0.4}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="text-gold-400 text-xl font-semibold uppercase tracking-wider">Closing Prayer</span>
        </motion.div>

        {/* Custom cross animation */}
        <motion.div
          variants={scaleIn}
          custom={0.1}
          className="mb-2"
        >
          <LottieAnimation
            src="/animations/cross-glow.json"
            style={{ width: 120, height: 120, margin: '0 auto' }}
            speed={0.5}
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={0.15}
          className="text-5xl md:text-7xl font-bold mb-8 text-shimmer pb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: '0 2px 20px rgba(0,0,0,0.7)',
            lineHeight: 1.2
          }}
        >
          Pray
        </motion.h2>

        {/* Prayer prompt */}
        <motion.div
          variants={scaleIn}
          custom={0.2}
          className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-10 border border-white/10 mb-8"
        >
          <p
            className="text-3xl md:text-4xl text-white leading-relaxed mb-6"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            Reread <span className="text-gold-400 font-semibold">Colossians 2:2</span>
          </p>

          <p
            className="text-2xl md:text-3xl italic text-white/90 leading-relaxed mb-8"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            "My goal is that they may be <strong className="text-white not-italic">encouraged in heart</strong> and{' '}
            <strong className="text-white not-italic">united in love</strong>, so that they may have the{' '}
            <strong className="text-white not-italic">full riches of complete understanding</strong>, in order that they may know the mystery of God, namely, Christ..."
          </p>

          <div className="w-20 h-px bg-gold-400/30 mx-auto mb-8" />

          <p
            className="text-2xl md:text-3xl text-gold-300"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            Pray that the qualities Paul longed to see in the lives of the Colossians
            <br />
            <strong>will also be apparent in you.</strong>
          </p>
        </motion.div>

        {/* Qualities to pray for */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          className="flex flex-wrap justify-center gap-4"
        >
          {['Encouraged heart', 'United in love', 'Full understanding', 'Knowing Christ'].map((item, index) => (
            <motion.span
              key={index}
              variants={scaleIn}
              custom={0.5 + index * 0.1}
              className="px-5 py-2.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-2xl"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Slide>
  )
}
