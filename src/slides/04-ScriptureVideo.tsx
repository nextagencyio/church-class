import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Slide, fadeUp, fadeIn, scaleIn } from '../components/Slide'
import { FloatingParticles } from '../components/FloatingParticles'

export function ScriptureVideoSlide() {
  const videoId = 'TKHESkJHBYo'
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault()
        e.stopImmediatePropagation()

        if (iframeRef.current?.contentWindow) {
          const command = isPlaying ? 'pauseVideo' : 'playVideo'
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: command }),
            '*'
          )
          setIsPlaying(!isPlaying)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown, { capture: true })
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true })
  }, [isPlaying])

  return (
    <Slide variant="scripture" className="relative overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles count={15} />

      {/* Background glow behind video */}
      <motion.div
        variants={fadeIn}
        custom={0.3}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[500px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center gap-12">
        {/* Left decorative element */}
        <motion.div
          variants={fadeIn}
          custom={0.4}
          className="hidden lg:flex flex-col items-center gap-6 text-white/20"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl"
          >
            📜
          </motion.div>
          <div className="w-px h-32 bg-gradient-to-b from-gold-400/30 to-transparent" />
          <span className="text-gold-400/40 text-base uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
            The Word of God
          </span>
        </motion.div>

        {/* Center content */}
        <div className="text-center">
          {/* Label */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-lg font-semibold uppercase tracking-wider">
              Listen to the Passage
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-5xl md:text-6xl font-bold text-gold-400 mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Colossians 2:1-7
          </motion.h2>

          {/* YouTube Shorts Embed */}
          <motion.div
            variants={scaleIn}
            custom={0.2}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-b from-gold-400/20 via-transparent to-gold-400/20 rounded-3xl" />
              <div className="absolute -inset-2 bg-slate-900/80 rounded-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <iframe
                  ref={iframeRef}
                  width="360"
                  height="640"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&enablejsapi=1`}
                  title="Colossians 2:1-7"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="block"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right decorative element */}
        <motion.div
          variants={fadeIn}
          custom={0.5}
          className="hidden lg:flex flex-col items-center gap-6 text-white/20"
        >
          <span className="text-gold-400/40 text-base uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>
            Colossians
          </span>
          <div className="w-px h-32 bg-gradient-to-b from-transparent to-gold-400/30" />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="text-8xl"
          >
            ✉️
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  )
}
