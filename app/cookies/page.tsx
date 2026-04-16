import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy — Mona',
  description: 'Cookie Policy for Mona / Mariona Ramos.',
}

export default function CookiesPage() {
  return (
    <main className="px-8 md:px-16 py-20 md:py-28 max-w-2xl mx-auto">
      <div className="mb-12">
        <Link
          href="/"
          className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          ← Back
        </Link>
      </div>

      <p className="text-[12px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
        Cookie Policy
      </p>

      <div className="space-y-8 text-sm font-light text-foreground leading-relaxed">
        <p className="text-muted-foreground text-[11px] tracking-[0.12em]">Last updated: April 2026</p>

        <p>
          This website uses only cookies and similar technologies that are necessary for the proper functioning, security, and basic performance of the site, unless stated otherwise.
        </p>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">What are cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">How cookies are used on this website</h2>
          <p>This website may use:</p>
          <ul className="space-y-1 pl-4 list-none">
            {[
              'strictly necessary cookies for core site functionality',
              'basic technical cookies related to security, page rendering, or navigation',
            ].map((item) => (
              <li key={item} className="before:content-['—'] before:mr-2 before:text-muted-foreground/50">
                {item}
              </li>
            ))}
          </ul>
          <p>
            At this time, this website does not use advertising or cross-site tracking cookies unless explicitly stated otherwise.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Third-party services</h2>
          <p>
            If third-party services are added in the future, such as analytics tools, embedded media, or marketing tools, this policy will be updated accordingly. Where required by law, consent will be requested before non-essential cookies are placed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Managing cookies</h2>
          <p>
            You can control or delete cookies through your browser settings. Please note that disabling certain necessary cookies may affect how the website functions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Contact</h2>
          <p>
            For questions about this Cookie Policy, contact:{' '}
            <a
              href="mailto:requestsmona@gmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors duration-200 border-b border-border pb-px"
            >
              requestsmona@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
