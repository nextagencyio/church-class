import { useState, useEffect, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SlideContainerProps {
  children: ReactNode[]
}

const smoothEase = [0.22, 1, 0.36, 1]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '40%' : '-40%',
    opacity: 0,
    scale: 0.92,
    filter: 'blur(10px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '40%' : '-40%',
    opacity: 0,
    scale: 0.92,
    filter: 'blur(10px)',
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  }),
}

export function SlideContainer({ children }: SlideContainerProps) {
  const [[currentSlide, direction], setSlide] = useState([0, 0])
  const totalSlides = children.length

  const navigate = useCallback(
    (newDirection: number) => {
      const newSlide = currentSlide + newDirection
      if (newSlide >= 0 && newSlide < totalSlides) {
        setSlide([newSlide, newDirection])
      }
    },
    [currentSlide, totalSlides]
  )

  const goToSlide = useCallback(
    (index: number) => {
      const direction = index > currentSlide ? 1 : -1
      setSlide([index, direction])
    },
    [currentSlide]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault()
          navigate(1)
          break
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault()
          navigate(-1)
          break
        case 'Home':
          e.preventDefault()
          setSlide([0, -1])
          break
        case 'End':
          e.preventDefault()
          setSlide([totalSlides - 1, 1])
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate, totalSlides])

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      const diff = touchStartX - touchEndX
      if (Math.abs(diff) > 50) {
        navigate(diff > 0 ? 1 : -1)
      }
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [navigate])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3, ease: smoothEase }}
        />
      </div>

      {/* Slide content */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 will-change-transform"
        >
          {children[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={() => navigate(-1)}
        disabled={currentSlide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-50"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => navigate(1)}
        disabled={currentSlide === totalSlides - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-50"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-gold-400 w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 text-sm text-white/50 font-mono z-50">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Keyboard hints */}
      <div className="absolute bottom-6 left-6 text-xs text-white/30 z-50 hidden md:block">
        Use arrow keys or swipe to navigate
      </div>
    </div>
  )
}
