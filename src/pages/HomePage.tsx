import { Hero } from '../components/home/Hero'
import { StatsBar } from '../components/home/StatsBar'
import { LogoCloud } from '../components/home/LogoCloud'
import { ServicesOverview } from '../components/home/ServicesOverview'
import { FeaturesGrid } from '../components/home/FeaturesGrid'
import { Testimonials } from '../components/home/Testimonials'
import { LatestInsights } from '../components/home/LatestInsights'
import { CTASection } from '../components/home/CTASection'

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LogoCloud />
      <ServicesOverview />
      <FeaturesGrid />
      <LatestInsights />
      <Testimonials />
      <CTASection />
    </>
  )
}
