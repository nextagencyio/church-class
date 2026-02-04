# Church Presentation Slides

A React-based slide presentation system with smooth animations, designed for classroom/church settings. Built with modern tooling and optimized for TV display.

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool with HMR
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animation library
- **Lottie** - JSON-based vector animations
- **lucide-react** - Icon library

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── Slide.tsx         # Base slide wrapper + animation variants
│   ├── SlideContainer.tsx # Navigation, transitions, progress
│   ├── FloatingParticles.tsx # Ambient gold particles
│   ├── Typewriter.tsx    # Word-by-word text reveal
│   └── LottieAnimation.tsx # Lottie player wrapper
├── slides/               # Individual slide content
│   ├── 01-Title.tsx
│   ├── 02-TreasureHook.tsx
│   └── ...
├── index.css             # Custom CSS + animations
├── App.tsx               # Slide ordering
└── main.tsx              # Entry point

public/
└── animations/           # Lottie JSON files
```

## Key Components

### SlideContainer

The main presentation controller handling:
- **Navigation** - Arrow keys, spacebar, Enter, Backspace, Home/End
- **Touch/Swipe** - Mobile support with 50px threshold
- **Transitions** - Directional slide with blur/scale/opacity
- **Progress bar** - Animated gold gradient at top
- **Slide dots** - Clickable with pulse animation on active
- **Counter** - Current/total display

### Slide

Base wrapper for all slides with:
- **Variants** - `default`, `scripture`, `discussion`, `title` (different gradient backgrounds)
- **Auto-animation** - Children animate on mount

### Animation Variants (Slide.tsx)

Pre-built Framer Motion variants:
```tsx
import { fadeUp, fadeIn, scaleIn, slideFromLeft, slideFromRight, stagger } from './Slide'
```

| Variant | Effect |
|---------|--------|
| `fadeUp` | Fade in + slide up 40px |
| `fadeIn` | Simple opacity fade |
| `scaleIn` | Scale from 0.8 + fade |
| `slideFromLeft` | Slide in from -60px |
| `slideFromRight` | Slide in from +60px |
| `stagger` | Container for staggered children |

All variants include subtle blur transitions and accept a `custom` delay prop.

### FloatingParticles

Ambient floating gold particles:
```tsx
<FloatingParticles count={25} />
```

### Typewriter

Word-by-word reveal animation:
```tsx
<Typewriter
  text="Your quote here"
  delay={1.2}    // Start delay in seconds
  speed={0.08}   // Seconds between words
/>
```

## Custom CSS Animations (index.css)

### `.text-shimmer`
Animated gold gradient that moves across text:
```tsx
<span className="text-shimmer">Shimmering Text</span>
```

### `.text-glow-pulse`
Pulsing gold glow for emphasis:
```tsx
<strong className="text-gold-300 text-glow-pulse">Important phrase</strong>
```

### `.dot-pulse`
Ripple effect for active indicators (used on slide dots)

## Color Theme

Custom gold/parchment palette defined in `index.css`:

```css
--color-gold-50 through --color-gold-900
--color-parchment-50 through --color-parchment-500
```

Usage: `text-gold-400`, `bg-gold-500/20`, `border-gold-400/30`

## Typography

- **Display font**: Playfair Display (titles, headings)
- **Body font**: Merriweather (serif, content)

Applied via CSS variables:
```css
--font-serif: 'Merriweather', Georgia, serif;
--font-display: 'Playfair Display', Georgia, serif;
```

## Creating New Slides

1. Create a new file in `src/slides/`:

```tsx
import { motion } from 'framer-motion'
import { Slide, fadeUp, scaleIn, stagger } from '../components/Slide'

export function MyNewSlide() {
  return (
    <Slide variant="default">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 variants={fadeUp} custom={0} className="text-5xl font-bold">
          Slide Title
        </motion.h2>

        <motion.p variants={fadeUp} custom={0.1} className="text-2xl text-white/70">
          Subtitle or content
        </motion.p>
      </div>
    </Slide>
  )
}
```

2. Import and add to `App.tsx`:

```tsx
import { MyNewSlide } from './slides/MyNewSlide'

// In the SlideContainer:
<SlideContainer>
  {/* existing slides */}
  <MyNewSlide />
</SlideContainer>
```

## Helper Components (Slide.tsx)

Ready-to-use styled components:

```tsx
<SlideTitle>Main Heading</SlideTitle>
<SlideSubtitle>Supporting text</SlideSubtitle>
<ScriptureVerse reference="John 3:16">For God so loved...</ScriptureVerse>
<BulletList items={['Point 1', 'Point 2', 'Point 3']} />
<DiscussionQuestion number={1}>What do you think?</DiscussionQuestion>
```

## Keyboard Controls

| Key | Action |
|-----|--------|
| `→` / `Space` / `Enter` | Next slide |
| `←` / `Backspace` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |

## YouTube Video Integration

For slides with embedded YouTube videos, use the IFrame API:

```tsx
const [isPlaying, setIsPlaying] = useState(false)
const iframeRef = useRef<HTMLIFrameElement>(null)

// Enable spacebar control
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault()
      e.stopImmediatePropagation()
      const command = isPlaying ? 'pauseVideo' : 'playVideo'
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command }),
        '*'
      )
      setIsPlaying(!isPlaying)
    }
  }
  window.addEventListener('keydown', handleKeyDown, { capture: true })
  return () => window.removeEventListener('keydown', handleKeyDown, { capture: true })
}, [isPlaying])

// IFrame with enablejsapi=1
<iframe
  ref={iframeRef}
  src="https://www.youtube.com/embed/VIDEO_ID?enablejsapi=1"
  allow="autoplay; encrypted-media"
/>
```

## Lottie Animations

Place JSON files in `public/animations/` and use:

```tsx
import { LottieAnimation } from '../components/LottieAnimation'

<LottieAnimation
  src="/animations/sparkle.json"
  style={{ width: 100, height: 100 }}
  speed={0.8}
/>
```

## Build for Production

```bash
npm run build
npm run preview
```

Output is in `dist/` folder, ready for static hosting.

## Customization Tips

1. **Slide backgrounds** - Edit `backgroundVariants` in `Slide.tsx`
2. **Transition timing** - Adjust `smoothEase` and durations in `SlideContainer.tsx`
3. **Animation delays** - Use the `custom` prop on motion elements
4. **Colors** - Modify CSS variables in `index.css`
5. **Progress bar** - Style in `SlideContainer.tsx` (gold gradient)

## License

MIT
