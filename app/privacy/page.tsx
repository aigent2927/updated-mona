import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Mona',
  description: 'Privacy Policy for Mona / Mariona Ramos.',
}

export default function PrivacyPage() {
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
        Privacy Policy
      </p>

      <div className="space-y-8 text-sm font-light text-foreground leading-relaxed">
        <p className="text-muted-foreground text-[11px] tracking-[0.12em]">Last updated: April 2026</p>

        <p>
          This website is operated by Mona / Mariona Ramos.
        </p>

        <p>
          If you contact me through the contact form or by email, I may process the personal data you choose to provide, such as your name, email address, and message content.
        </p>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">What data is collected</h2>
          <ul className="space-y-1 pl-4 list-none">
            {[
              'Name',
              'Email address',
              'Message content',
              'Any other information you choose to include in your message',
            ].map((item) => (
              <li key={item} className="before:content-['—'] before:mr-2 before:text-muted-foreground/50">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Why this data is processed</h2>
          <p>Your data is processed only to:</p>
          <ul className="space-y-1 pl-4 list-none">
            {[
              'respond to your enquiry',
              'communicate with you about your request',
              'keep a record of relevant communications',
            ].map((item) => (
              <li key={item} className="before:content-['—'] before:mr-2 before:text-muted-foreground/50">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Legal basis</h2>
          <p>Your data is processed on the basis of:</p>
          <ul className="space-y-1 pl-4 list-none">
            {[
              'steps taken at your request before entering into a potential professional relationship, or',
              'my legitimate interest in responding to enquiries and managing communications related to my work',
            ].map((item) => (
              <li key={item} className="before:content-['—'] before:mr-2 before:text-muted-foreground/50">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Who receives your data</h2>
          <p>
            Your data is not sold. It may be processed by service providers used to run this website or receive contact form submissions, only where necessary to operate the site and manage communications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">How long data is kept</h2>
          <p>
            Personal data sent through the contact form or by email is kept only for as long as necessary to respond to your enquiry and maintain relevant communication records, unless a longer period is required for legal, administrative, or professional reasons.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Your rights</h2>
          <p>Depending on your situation and applicable law, you may have the right to:</p>
          <ul className="space-y-1 pl-4 list-none">
            {[
              'request access to your personal data',
              'request correction of inaccurate data',
              'request deletion of your data',
              'object to certain processing',
              'request restriction of processing',
              'lodge a complaint with the competent data protection authority',
            ].map((item) => (
              <li key={item} className="before:content-['—'] before:mr-2 before:text-muted-foreground/50">
                {item}
              </li>
            ))}
          </ul>
          <p>
            To exercise any of these rights, contact:{' '}
            <a
              href="mailto:requestsmona@gmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors duration-200 border-b border-border pb-px"
            >
              requestsmona@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Data security</h2>
          <p>
            Reasonable technical and organisational measures are taken to protect personal data against unauthorised access, loss, misuse, or disclosure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[12px] tracking-[0.22em] uppercase text-muted-foreground">Changes</h2>
          <p>
            This policy may be updated from time to time. The latest version will always be published on this website.
          </p>
        </section>
      </div>
    </main>
  )
}
