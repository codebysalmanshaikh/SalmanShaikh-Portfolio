
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl'
          : 'bg-transparent'
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#hero"
          className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white"
        >
          Growth Studio By Salman<span className="text-violet-500">.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-violet-500/40 bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 md:inline-flex"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;

