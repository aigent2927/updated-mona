'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Editorial images with varied positioning for organic layout
const editorialImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_28-Wm47vKHouboCZAdtYl1uJUyNCjXEhd.jpg',
    alt: 'Model with puppet strings and colorful layered vest',
    from: 'left',
    offsetX: '5%',
    width: 'w-[70%] md:w-[38%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-12',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_14-USAxdSCRHMUr25TsjY3mG1lswT96jk.jpg',
    alt: 'Seated model with star collar and brocade gown',
    from: 'right',
    offsetX: '12%',
    width: 'w-[55%] md:w-[28%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-32',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_38-G5rZV83cOcwbZWEfzKa0PswptXWEEO.jpg',
    alt: 'Two models in kitchen scene',
    from: 'left',
    offsetX: '18%',
    width: 'w-[65%] md:w-[42%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-16',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_06-ZoLWXp5zcncWvF2sBmO17NL8JIxl8n.jpg',
    alt: 'Overhead view of model reclined on patterned floor',
    from: 'right',
    offsetX: '0%',
    width: 'w-[85%] md:w-[55%]',
    aspect: 'aspect-[3/2]',
    marginBottom: 'mb-28',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_33-Sq8nyhm0Y4aBgZ7VcJxwZMvpTAjCTU.jpg',
    alt: 'Model seated in checkered outfit with puppet string',
    from: 'left',
    offsetX: '8%',
    width: 'w-[50%] md:w-[26%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-20',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_27-chlqhAdAsvMoOzXUZOhM77jRTGq1ZY.jpg',
    alt: 'Model with puffy sleeve blouse and floral skirt',
    from: 'right',
    offsetX: '15%',
    width: 'w-[60%] md:w-[34%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-10',
  },
]

// Second group of editorial images after text
const editorialImagesAfter = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_35-7E2MRMsF40I6Q7FIYcSxqHw5ioqxON.jpg',
    alt: 'Two models in checkered outfits on daybed',
    from: 'right',
    offsetX: '6%',
    width: 'w-[68%] md:w-[40%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-24',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_02-FO30gUT6uwU222bsEbLYRwgqZSjmjb.jpg',
    alt: 'Seated model in red hand-knit sweater',
    from: 'left',
    offsetX: '20%',
    width: 'w-[52%] md:w-[30%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-14',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_22-FmbV1UwqHCw1MSAPvCJe5rQiJ5b2Io.jpg',
    alt: 'Library scene with floral jacket and red tiered skirt',
    from: 'left',
    offsetX: '0%',
    width: 'w-[90%] md:w-[58%]',
    aspect: 'aspect-[3/2]',
    marginBottom: 'mb-32',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_17-rmsGNl6Ona8KyCMY56s41CFepdj0El.jpg',
    alt: 'Model in tweed jacket with burgundy pants',
    from: 'right',
    offsetX: '10%',
    width: 'w-[58%] md:w-[32%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-18',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_19-Delehd6usN5SYVBg679Yz4zbW3rdli.jpg',
    alt: 'Low angle of model in tweed jacket',
    from: 'right',
    offsetX: '0%',
    width: 'w-[80%] md:w-[50%]',
    aspect: 'aspect-[3/2]',
    marginBottom: 'mb-26',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_25-WYZR0p5tHl51cag4r9mSV7xmM6udDZ.jpg',
    alt: 'Seated model in teal fur coat',
    from: 'left',
    offsetX: '25%',
    width: 'w-[48%] md:w-[25%]',
    aspect: 'aspect-[2/3]',
    marginBottom: 'mb-20',
  },
]

// Lookbook images
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
  from: 'left' | 'right'
  offsetX: string
  width: string
  aspect: string
  marginBottom: string
}

function EditorialImage({ src, alt, from, offsetX, width, aspect, marginBottom }: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // One-way: only reveal, never hide again
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '-8% 0px -8% 0px',
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Calculate the horizontal translation for enter/exit
  const translateX = from === 'left' ? '-100px' : '100px'

  // Position styles based on direction
  const positionStyle = from === 'left'
    ? { marginLeft: offsetX, marginRight: 'auto' }
    : { marginRight: offsetX, marginLeft: 'auto' }

  return (
    <div
      ref={ref}
      className={`${width} ${marginBottom}`}
      style={{
        ...positionStyle,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${translateX})`,
        transition: 'opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <div className={`relative ${aspect} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 50vw"
        />
      </div>
    </div>
  )
}

function LookbookImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex-1 min-w-0 aspect-[3/4] group" style={{ zIndex: 0 }}>
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.07] group-hover:z-10"
        style={{ transformOrigin: 'center center' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 12.5vw"
        />
      </div>
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

      {/* First group of editorial images */}
      <div className="flex flex-col">
        {editorialImages.map((img) => (
          <EditorialImage key={img.src} {...img} from={img.from as 'left' | 'right'} />
        ))}
      </div>

      {/* Collection text block */}
      <div className="flex flex-col items-center text-center py-20 md:py-32 px-4 md:px-16 lg:px-32 max-w-4xl mx-auto">
        <h3 className="font-logo text-3xl md:text-4xl text-foreground mb-10 text-balance leading-tight">
          Puppet Riot FW25
        </h3>
        <p className="font-sans text-[13px] tracking-[0.02em] text-muted-foreground leading-[1.8] max-w-2xl text-balance">
          Puppet Riot is a celebration of self-expression, theatricality, and rebellion. Inspired by the Blitz Kids of 1980s London, the collection reinterprets their irreverent and maximalist spirit through the symbolism of puppets, exploring the delicate balance between control and freedom. The Tiller Clowes puppets, with their rigid and nostalgic aesthetic, become a metaphor for the identity play and performance that defined this subculture. Like the Blitz Kids, the puppets come to life when they take the stage, becoming protagonists of their own narrative, transforming the inanimate into something vibrant and provocative. The collection uses repurposed and vintage fabrics, from upholstery and curtains to other domestic textiles, giving new life to materials loaded with history and character. More than a collection, Puppet Riot is a visual manifesto: an ode to excess, artifice, and transformation, where each look is a mask, a costume, and a declaration of intent.
        </p>
      </div>

      {/* Second group of editorial images */}
      <div className="flex flex-col">
        {editorialImagesAfter.map((img) => (
          <EditorialImage key={img.src} {...img} from={img.from as 'left' | 'right'} />
        ))}
      </div>

      {/* Lookbook section */}
      <div className="mt-32">
        <h3 className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-12 text-center">
          Lookbook
        </h3>
        <div className="flex w-full overflow-visible">
          {lookbookImages.map((img) => (
            <LookbookImage key={img.src} {...img} />
          ))}
        </div>
      </div>
    </section>
  )
}
