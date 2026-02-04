import { motion } from 'framer-motion'
import { Slide, fadeUp, DiscussionQuestion, stagger } from '../components/Slide'

export function TodaysLiesSlide() {
  return (
    <Slide variant="discussion">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/10 border border-gold-400/30 mb-6">
            <span className="text-gold-400 text-base font-semibold uppercase tracking-wider">Discussion Questions</span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Discerning <span className="text-gold-400">Truth</span>
          </h2>
        </motion.div>

        {/* Questions */}
        <motion.div variants={stagger} className="space-y-8">
          <DiscussionQuestion number={1}>
            What are some of today's "plausible words" which can deceive Christians?
          </DiscussionQuestion>

          <DiscussionQuestion number={2}>
            Have you ever been fooled or at least enticed by plausible-sounding lies about Christian living? If so, what was the outcome? If not, how did you discern the falsehood?
          </DiscussionQuestion>
        </motion.div>

      </div>
    </Slide>
  )
}
