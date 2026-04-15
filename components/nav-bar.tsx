'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50"
    >
      <nav
        className="flex flex-col items-center px-6 md:px-12 pt-5 pb-4"
        aria-label="Main navigation"
      >
        {/* Centered Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('#home')
          }}
          className="font-logo text-2xl md:text-3xl text-foreground tracking-wide hover:opacity-70 transition-opacity duration-300 mb-3"
          aria-label="Mona — Home"
        >
          Mona
        </a>

        {/* Desktop nav - centered below logo */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className="relative font-sans text-[13px] tracking-[0.12em] text-foreground/70 hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger - positioned absolute top right */}
        <button
          className="md:hidden absolute top-5 right-6 flex flex-col gap-[4px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background border-b border-border ${
          menuOpen ? 'max-h-64 py-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className="relative font-sans text-[13px] tracking-[0.12em] text-foreground/70 hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
