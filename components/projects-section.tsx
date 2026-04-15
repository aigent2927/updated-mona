'use client'

import Image from 'next/image'

const editorialImagesFirst = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_01-ebuNAn3CMp3Z7jZIxp8VF7wgqKQrHy.jpg',
    alt: 'Puppet Riot FW25 - Look 01, structured jacket with marionette puppet strings',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_05-FxGew7UAG3gURxtkkjAX9lxbIERSMx.jpg',
    alt: 'Puppet Riot FW25 - Look 05, sage green fur coat with gathered blouse and floral skirt',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_12-JzkibWIRkN3VZuytFBqBorFk37ETIH.jpg',
    alt: 'Puppet Riot FW25 - Look 12, pink check jacket with burgundy overalls and balloon silk cuffs',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_13-YLVhdPECzvHs1KODP7FiJaDAlcJca3.jpg',
    alt: 'Puppet Riot FW25 - Look 13, green floral top with red tiered chinoiserie skirt and marionette strings',
  },
]

const editorialImagesSecond = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_16-7fbHEeaCFsj6WtdL1ZMwJOzA6Pahaz.jpg',
    alt: 'Puppet Riot FW25 - Look 16, sculptural silver brocade cape with burgundy velvet corset',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_19-3UUZlSvk3gyw9r9n70Kwf8UBhDh7er.jpg',
    alt: 'Puppet Riot FW25 - Look 19, floral vest with beige check suit',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_22-smOaNby3M2wE6TzOPqtyGhwih7rlbI.jpg',
    alt: 'Puppet Riot FW25 - Look 22, red hand-knit sweater with tassel cape and tiered silver brocade skirt',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Lookbook_26-Z3gxDbM4OGhCIbf2VQCkvrN0hb4mXR.jpg',
    alt: 'Puppet Riot FW25 - Look 26, green tapestry jacket with burgundy vest, fringe details and marionette strings',
  },
]

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

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden group col-span-1 aspect-[3/4]">
      <div className="relative w-full h-full bg-accent overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
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
      className="px-8 md:px-16 pt-28 pb-12"
      aria-labelledby="projects-heading"
    >
      <div className="flex items-baseline justify-between mb-16">
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

      {/* First group of 4 editorial images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        {editorialImagesFirst.map((img) => (
          <ProjectImage key={img.src} {...img} />
        ))}
      </div>

      {/* Collection text block */}
      <div className="flex flex-col items-center text-center py-20 md:py-28 px-8 md:px-24 lg:px-48">
        <h3 className="text-3xl md:text-4xl font-light italic text-foreground mb-10 text-balance leading-tight">
          Puppet Riot FW25
        </h3>
        <p className="font-sans text-[13px] tracking-[0.02em] text-muted-foreground leading-relaxed max-w-2xl text-balance">
          Puppet Riot is a celebration of self-expression, theatricality, and rebellion. Inspired by the Blitz Kids of 1980s London, the collection reinterprets their irreverent and maximalist spirit through the symbolism of puppets, exploring the delicate balance between control and freedom. The Tiller Clowes puppets, with their rigid and nostalgic aesthetic, become a metaphor for the identity play and performance that defined this subculture. Like the Blitz Kids, the puppets come to life when they take the stage, becoming protagonists of their own narrative, transforming the inanimate into something vibrant and provocative. The collection uses repurposed and vintage fabrics, from upholstery and curtains to other domestic textiles, giving new life to materials loaded with history and character. More than a collection, Puppet Riot is a visual manifesto: an ode to excess, artifice, and transformation, where each look is a mask, a costume, and a declaration of intent.
        </p>
      </div>

      {/* Second group of 4 editorial images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {editorialImagesSecond.map((img) => (
          <ProjectImage key={img.src} {...img} />
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
