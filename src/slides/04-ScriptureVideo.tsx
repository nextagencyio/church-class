import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn } from '../components/Slide'

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
    <Slide variant="default">
      <div className="max-w-6xl mx-auto text-center">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-base font-semibold uppercase tracking-wider">
            Listen to the Passage
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={0.1}
          className="text-4xl md:text-5xl font-bold text-gold-400 mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Colossians 2:1-7
        </motion.h2>

        {/* YouTube Shorts Embed - vertical format, larger for TV */}
        <motion.div
          variants={scaleIn}
          custom={0.2}
          className="flex justify-center"
        >
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
        </motion.div>

        {/* Instruction */}
        <motion.p
          variants={fadeUp}
          custom={0.4}
          className="mt-6 text-white/60 text-lg"
        >
          Press <span className="text-gold-400 font-semibold">spacebar</span> to {isPlaying ? 'pause' : 'play'}
        </motion.p>
      </div>
    </Slide>
  )
}
