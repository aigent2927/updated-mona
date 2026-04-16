import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { IntroAnimation } from '@/components/intro-animation'

export default function Page() {
  return (
    <main>
      <IntroAnimation />
      <NavBar />
      <div style={{ height: '200vh' }}>
        <HeroSection />
      </div>
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
