'use client'

import { useEffect, useState } from 'react'
import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { IntroAnimation } from '@/components/intro-animation'

export default function Page() {
  const [pastHero, setPastHero] = useState(false)
  const [selloVisible, setSelloVisible] = useState(false)

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const handleScroll = () => {
      const past = window.scrollY > window.innerHeight
      setPastHero(past)
      if (past) {
        setTimeout(() => setSelloVisible(true), 50)
      } else {
        setSelloVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <h1 className="sr-only">
        Mona — Fashion Designer &amp; Pattern Maker based in Barcelona
      </h1>
      <div className="sr-only">
        <p>
          Mariona Ramos (Mona) is a Barcelona-based fashion designer and creative pattern maker
          working internationally. Her work is shaped through contrast — a deliberate response to a
          contemporary landscape that feels increasingly neutral, functional, and quiet.
        </p>
        <p>
          Her design practice is built on visual strength and ornament, with the conviction that
          fashion should provoke, captivate, and command presence. Rather than aiming to please, her
          work seeks to spark curiosity. FW25 collection Puppet Riot — inspired by the Blitz Kids of
          1980s London — brings this philosophy to life through repurposed and vintage fabrics:
          upholstery, curtains, and domestic textiles transformed into striking, theatrical pieces.
        </p>
        <p>
          With professional experience at Viktor &amp; Rolf and Tania Morenilla. Featured in The
          Vanilla Issue. Finalist at the Runhua Award Contest 2025, Jiangxi Institute of Fashion
          Technology, Nanchang, China. Open for bespoke commissions, pattern making, and editorial
          collaborations.
        </p>
        <p>
          fashion designer Barcelona — diseñadora de moda Barcelona — bespoke fashion design —
          patronista Barcelona — diseño de moda editorial — fashion designer available for commissions
          — moda Barcelona — creative pattern maker Barcelona
        </p>
      </div>
      {pastHero && (
        <img
          src="/images/sello_mona.png"
          alt=""
          aria-hidden="true"
          style={{
            transition: 'opacity 0.8s ease',
            opacity: selloVisible ? 0.2 : 0,
          }}
          className="fixed bottom-6 right-6 w-48 z-0 pointer-events-none select-none mix-blend-multiply"
        />
      )}
      <IntroAnimation />
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
