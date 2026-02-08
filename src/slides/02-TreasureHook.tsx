import { motion } from 'framer-motion'
import { Slide, fadeUp, fadeIn, stagger } from '../components/Slide'
import { LottieAnimation } from '../components/LottieAnimation'

export function TreasureHookSlide() {
  return (
    <Slide variant="default">
      <div className="max-w-7xl mx-auto text-center">
        {/* Custom Treasure Map Animation */}
        <motion.div
          variants={fadeIn}
          custom={0}
          className="mb-6"
        >
          <LottieAnimation
            src="/animations/treasure-map.json"
            style={{ width: 200, height: 200, margin: '0 auto' }}
            speed={0.8}
          />
        </motion.div>

        {/* Main content */}
        <motion.h2
          variants={fadeUp}
          custom={0.1}
          className="text-5xl md:text-7xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          The Treasure Map
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-3xl md:text-4xl text-white/80 leading-relaxed mb-10"
        >
          In adventure stories like <em>Treasure Island</em>, the plot hinges on
          discovering an ancient map. Those who find it realize they could locate
          treasure that had been hidden for centuries—riches beyond their wildest
          imagination.
        </motion.p>

        {/* Visual divider */}
        <motion.div
          variants={fadeIn}
          custom={0.3}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-24 h-px bg-gold-400/30" />
          <span className="text-gold-400 text-2xl">✦</span>
          <div className="w-24 h-px bg-gold-400/30" />
        </motion.div>

        <motion.div
          variants={stagger}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10"
        >
          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="text-3xl md:text-4xl text-gold-300 leading-relaxed"
          >
            Paul has spoken of <strong>God's secret plan</strong>—a plan that has lain hidden
            like a map in a locked and dusty cupboard for ages and generations.
            <br /><br />
            Now quite suddenly, it has come to light in the events concerning Jesus the Messiah.
          </motion.p>
        </motion.div>
      </div>
    </Slide>
  )
}
