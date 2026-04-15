import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-foreground"
      aria-label="Hero"
    >
      {/* Editorial hero image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_03-Vqb1bfz56IBsZaGXI6g8RzQNQ9gtQn.jpg"
        alt="Puppet Riot FW25 Editorial - Model wearing hand-knit sweater with tassel details and brocade skirt"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />
    </section>
  )
}
