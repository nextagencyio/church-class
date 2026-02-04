import { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

interface LottieAnimationProps {
  src: string
  className?: string
  autoplay?: boolean
  loop?: boolean
  speed?: number
  style?: React.CSSProperties
}

export function LottieAnimation({
  src,
  className = '',
  autoplay = true,
  loop = true,
  speed = 1,
  style,
}: LottieAnimationProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className} style={style} />
  }

  return (
    <Player
      src={src}
      className={className}
      autoplay={autoplay}
      loop={loop}
      speed={speed}
      style={style}
    />
  )
}
