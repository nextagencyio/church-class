import { SlideContainer } from './components/SlideContainer'
import { TitleSlide } from './slides/01-Title'
import { TreasureHookSlide } from './slides/02-TreasureHook'
import { OpeningQuestionSlide } from './slides/03-OpeningQuestion'
import { ScriptureVideoSlide } from './slides/04-ScriptureVideo'
import { ScriptureReadingSlide } from './slides/04-ScriptureReading'
import { JoysAndConcernsSlide } from './slides/06-JoysAndConcerns'
import { MapDiscussionSlide } from './slides/06b-MapDiscussion'
import { WisdomAndKnowledgeSlide } from './slides/11-WisdomAndKnowledge'
import { KingJesusSlide } from './slides/05-KingJesus'
import { CenterOfRealitySlide } from './slides/07-CenterOfReality'
import { CenterDiscussionSlide } from './slides/07b-CenterDiscussion'
import { OffensiveDiscussionSlide } from './slides/07c-OffensiveDiscussion'
import { PlausibleLiesSlide } from './slides/08-PlausibleLies'
import { TodaysLiesSlide } from './slides/09-TodaysLies'
import { ThreeWordPicturesSlide } from './slides/10-ThreeWordPictures'
import { WisdomDiscussionSlide } from './slides/11b-WisdomDiscussion'
import { PrayerSlide } from './slides/12-Prayer'

function App() {
  return (
    <SlideContainer>
      <TitleSlide />
      <TreasureHookSlide />
      <OpeningQuestionSlide />
      <ScriptureVideoSlide />
      <ScriptureReadingSlide />
      <JoysAndConcernsSlide />
      <MapDiscussionSlide />
      <WisdomAndKnowledgeSlide />
      <KingJesusSlide />
      <CenterOfRealitySlide />
      <CenterDiscussionSlide />
      <OffensiveDiscussionSlide />
      <PlausibleLiesSlide />
      <TodaysLiesSlide />
      <ThreeWordPicturesSlide />
      <WisdomDiscussionSlide />
      <PrayerSlide />
    </SlideContainer>
  )
}

export default App
