'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Editorial images - scattered layout before text block
const editorialImagesBefore = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_28-lkYk6swycfyneRHfYbzV7wNRrx0exo.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model with puppet strings and colorful layered vest',
    position: 'left',
    size: 'medium',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_14-USAxdSCRHMUr25TsjY3mG1lswT96jk.jpg',
    alt: 'Puppet Riot FW25 Editorial - Seated model with star collar and brocade gown',
    position: 'right',
    size: 'small',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_06-ZoLWXp5zcncWvF2sBmO17NL8JIxl8n.jpg',
    alt: 'Puppet Riot FW25 Editorial - Overhead view of model reclined on patterned floor',
    position: 'left',
    size: 'wide',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_33-Akn2ibKEKvD8TtVBhLjgFqNcgdmMZN.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model seated in checkered outfit with puppet string',
    position: 'right',
    size: 'medium',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_27-AIdQ9XFHJ0IG01VVWFV8nn1S4wCQ6r.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model with puffy sleeve blouse and floral skirt',
    position: 'center',
    size: 'small',
  },
]

// Editorial images - scattered layout after text block
const editorialImagesAfter = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_35-tsrwS2R91PuR5HMwUZeHyBNm5D4odB.jpg',
    alt: 'Puppet Riot FW25 Editorial - Two models in checkered outfits',
    position: 'right',
    size: 'medium',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_02-FO30gUT6uwU222bsEbLYRwgqZSjmjb.jpg',
    alt: 'Puppet Riot FW25 Editorial - Seated model in red hand-knit sweater',
    position: 'left',
    size: 'small',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_17-rmsGNl6Ona8KyCMY56s41CFepdj0El.jpg',
    alt: 'Puppet Riot FW25 Editorial - Model in tweed jacket with burgundy pants',
    position: 'left',
    size: 'medium',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_19-Delehd6usN5SYVBg679Yz4zbW3rdli.jpg',
    alt: 'Puppet Riot FW25 Editorial - Low angle of model in tweed jacket',
    position: 'right',
    size: 'wide',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_22-FmbV1UwqHCw1MSAPvCJe5rQiJ5b2Io.jpg',
    alt: 'Puppet Riot FW25 Editorial - Library scene with floral jacket and red tiered skirt',
    position: 'center',
    size: 'medium',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_25-WYZR0p5tHl51cag4r9mSV7xmM6udDZ.jpg',
    alt: 'Puppet Riot FW25 Editorial - Seated model in teal fur coat',
    position: 'right',
    size: 'small',
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
  index: number
}

function EditorialImage({ src, alt, position, size, index }: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Determine alignment classes based on position
  const alignmentClasses = {
    left: 'mr-auto ml-0 md:ml-8 lg:ml-16',
    right: 'ml-auto mr-0 md:mr-8 lg:mr-16',
    center: 'mx-auto',
  }[position] || 'mx-auto'

  // Determine size classes
  const sizeClasses = {
    small: 'w-[55%] md:w-[32%] lg:w-[28%]',
    medium: 'w-[70%] md:w-[40%] lg:w-[35%]',
    wide: 'w-[85%] md:w-[55%] lg:w-[48%]',
  }[size] || 'w-[60%] md:w-[38%]'

  // Determine aspect ratio based on size
  const aspectClasses = size === 'wide' ? 'aspect-[4/3]' : 'aspect-[3/4]'

  // Animation direction based on position
  const slideFrom = position === 'right' ? 'translate-x-12' : '-translate-x-12'

  return (
    <div
      ref={ref}
      className={`${sizeClasses} ${alignmentClasses} mb-16 md:mb-24 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${slideFrom}`
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`relative ${aspectClasses} overflow-hidden group`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
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
          <EditorialImage key={img.src} {...img} index={i} />
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
          <EditorialImage key={img.src} {...img} index={i} />
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
