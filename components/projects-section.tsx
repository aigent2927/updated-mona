'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'

// Editorial images with aspect ratios preserved
const editorialImagesBefore = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_28-Wm47vKHouboCZAdtYl1uJUyNCjXEhd.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model with puppet strings and colorful layered vest',
    position: 'left',
    size: 'medium',
    aspect: 'portrait',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_14-USAxdSCRHMUr25TsjY3mG1lswT96jk.jpg',
    alt: 'Puppet Riot FW25 Editorial - Seated model with star collar and brocade gown',
    position: 'right',
    size: 'small',
    aspect: 'portrait',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_38-G5rZV83cOcwbZWEfzKa0PswptXWEEO.jpg',
    alt: 'Puppet Riot FW25 Editorial - Two models in kitchen scene',
    position: 'center',
    size: 'medium',
    aspect: 'portrait',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_06-ZoLWXp5zcncWvF2sBmO17NL8JIxl8n.jpg',
    alt: 'Puppet Riot FW25 Editorial - Overhead view of model reclined on patterned floor',
    position: 'right',
    size: 'wide',
    aspect: 'landscape',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_33-Sq8nyhm0Y4aBgZ7VcJxwZMvpTAjCTU.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model seated in checkered outfit with puppet string',
    position: 'left',
    size: 'small',
    aspect: 'portrait',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_27-chlqhAdAsvMoOzXUZOhM77jRTGq1ZY.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model with puffy sleeve blouse and floral skirt',
    position: 'right',
    size: 'medium',
    aspect: 'portrait',
  },
]

// Editorial images - after text block
const editorialImagesAfter = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_35-7E2MRMsF40I6Q7FIYcSxqHw5ioqxON.jpg',
    alt: 'Puppet Riot FW25 Editorial - Two models in checkered outfits on daybed',
    position: 'left',
    size: 'medium',
    aspect: 'portrait',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_02-FO30gUT6uwU222bsEbLYRwgqZSjmjb.jpg',
    alt: 'Puppet Riot FW25 Editorial - Seated model in red hand-knit sweater',
    position: 'right',
    size: 'small',
    aspect: 'portrait',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_22-FmbV1UwqHCw1MSAPvCJe5rQiJ5b2Io.jpg',
    alt: 'Puppet Riot FW25 Editorial - Library scene with floral jacket and red tiered skirt',
    position: 'center',
    size: 'wide',
    aspect: 'landscape',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_17-rmsGNl6Ona8KyCMY56s41CFepdj0El.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model in tweed jacket with burgundy pants',
    position: 'left',
    size: 'medium',
    aspect: 'portrait',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_19-Delehd6usN5SYVBg679Yz4zbW3rdli.jpg',
    alt: 'Puppet Riot FW25 Editorial - Low angle of model in tweed jacket',
    position: 'right',
    size: 'wide',
    aspect: 'landscape',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_25-WYZR0p5tHl51cag4r9mSV7xmM6udDZ.jpg',
    alt: 'Puppet Riot FW25 Editorial - Seated model in teal fur coat',
    position: 'center',
    size: 'small',
    aspect: 'portrait',
  },
]

// Lookbook images for horizontal strip
const lookbookImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_01-ebuNAn3CMp3Z7jZIxp8VF7wgqKQrHy.jpg',
    alt: 'Lookbook 01',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_05-FxGew7UAG3gURxtkkjAX9lxbIERSMx.jpg',
    alt: 'Lookbook 05',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_12-JzkibWIRkN3VZuytFBqBorFk37ETIH.jpg',
    alt: 'Lookbook 12',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_13-YLVhdPECzvHs1KODP7FiJaDAlcJca3.jpg',
    alt: 'Lookbook 13',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_16-7fbHEeaCFsj6WtdL1ZMwJOzA6Pahaz.jpg',
    alt: 'Lookbook 16',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_19-3UUZlSvk3gyw9r9n70Kwf8UBhDh7er.jpg',
    alt: 'Lookbook 19',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_22-smOaNby3M2wE6TzOPqtyGhwih7rlbI.jpg',
    alt: 'Lookbook 22',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_26-Z3gxDbM4OGhCIbf2VQCkvrN0hb4mXR.jpg',
    alt: 'Lookbook 26',
  },
]

interface EditorialImageProps {
  src: string
  alt: string
  position: string
  size: string
  aspect: string
  index: number
  groupOffset: number
}

function EditorialImage({ src, alt, position, size, aspect, index, groupOffset }: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    // Bidirectional: show when entering, hide when leaving
    setIsVisible(entry.isIntersecting)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.08,
      rootMargin: '-5% 0px -12% 0px',
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [handleIntersection])

  // Alignment classes based on position
  const alignmentClasses = {
    left: 'mr-auto ml-0 md:ml-12 lg:ml-20',
    right: 'ml-auto mr-0 md:mr-12 lg:mr-20',
    center: 'mx-auto',
  }[position] || 'mx-auto'

  // Size classes - width
  const sizeClasses = {
    small: 'w-[60%] md:w-[35%] lg:w-[30%]',
    medium: 'w-[75%] md:w-[45%] lg:w-[38%]',
    wide: 'w-[90%] md:w-[60%] lg:w-[52%]',
  }[size] || 'w-[65%] md:w-[40%]'

  // Aspect ratio based on image orientation
  const aspectClasses = aspect === 'landscape' ? 'aspect-[3/2]' : 'aspect-[2/3]'

  // Animation direction based on position
  const getTransform = () => {
    if (position === 'right') return 'translateX(60px)'
    if (position === 'left') return 'translateX(-60px)'
    return 'translateY(40px)'
  }

  // Staggered timing with rhythm variation
  const getDelay = () => {
    const baseDelay = (index + groupOffset) * 60
    // Add subtle variation for rhythm
    const variation = index % 3 === 0 ? 30 : index % 2 === 0 ? -20 : 0
    return baseDelay + variation
  }

  // Margin variation for visual rhythm
  const marginClasses = {
    0: 'mb-20 md:mb-32',
    1: 'mb-16 md:mb-24',
    2: 'mb-24 md:mb-36',
    3: 'mb-14 md:mb-22',
    4: 'mb-20 md:mb-28',
    5: 'mb-18 md:mb-30',
  }[index % 6] || 'mb-20 md:mb-28'

  return (
    <div
      ref={ref}
      className={`${sizeClasses} ${alignmentClasses} ${marginClasses}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        transitionDelay: `${getDelay()}ms`,
      }}
    >
      <div className={`relative ${aspectClasses} overflow-hidden group`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 55vw, 45vw"
        />
      </div>
    </div>
  )
}

function LookbookImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex-1 min-w-0 aspect-[3/4] overflow-hidden transition-all duration-500 ease-out hover:flex-[1.3]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 12.5vw"
      />
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 pt-28 pb-12"
      aria-labelledby="projects-heading"
    >
      <div className="flex items-baseline justify-between mb-20 md:mb-28">
        <h2
          id="projects-heading"
          className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground"
        >
          Projects
        </h2>
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">
          Selected Work
        </span>
      </div>

      {/* Scattered editorial images - first group */}
      <div className="flex flex-col">
        {editorialImagesBefore.map((img, i) => (
          <EditorialImage key={img.src} {...img} index={i} groupOffset={0} />
        ))}
      </div>

      {/* Collection text block */}
      <div className="flex flex-col items-center text-center py-16 md:py-24 px-4 md:px-16 lg:px-32 max-w-4xl mx-auto">
        <h3 className="font-logo text-3xl md:text-4xl text-foreground mb-10 text-balance leading-tight">
          Puppet Riot FW25
        </h3>
        <p className="font-sans text-[13px] tracking-[0.02em] text-muted-foreground leading-[1.8] max-w-2xl text-balance">
          Puppet Riot is a celebration of self-expression, theatricality, and rebellion. Inspired by the Blitz Kids of 1980s London, the collection reinterprets their irreverent and maximalist spirit through the symbolism of puppets, exploring the delicate balance between control and freedom. The Tiller Clowes puppets, with their rigid and nostalgic aesthetic, become a metaphor for the identity play and performance that defined this subculture. Like the Blitz Kids, the puppets come to life when they take the stage, becoming protagonists of their own narrative, transforming the inanimate into something vibrant and provocative. The collection uses repurposed and vintage fabrics, from upholstery and curtains to other domestic textiles, giving new life to materials loaded with history and character. More than a collection, Puppet Riot is a visual manifesto: an ode to excess, artifice, and transformation, where each look is a mask, a costume, and a declaration of intent.
        </p>
      </div>

      {/* Scattered editorial images - second group */}
      <div className="flex flex-col pt-8">
        {editorialImagesAfter.map((img, i) => (
          <EditorialImage key={img.src} {...img} index={i} groupOffset={editorialImagesBefore.length} />
        ))}
      </div>

      {/* Lookbook section */}
      <div className="mt-32">
        <h3 className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-12 text-center">
          Lookbook
        </h3>
        <div className="flex w-full">
          {lookbookImages.map((img) => (
            <LookbookImage key={img.src} {...img} />
          ))}
        </div>
      </div>
    </section>
  )
}
