
// import { useEffect, useState } from 'react';

// const navLinks = [
//   { name: 'Work', href: '#projects' },
//   { name: 'Services', href: '#services' },
//   { name: 'About', href: '#about' },
//   { name: 'Contact', href: '#contact' },
// ];

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
//         ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl'
//         : 'bg-transparent'
//         }`}
//     >
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
//         {/* Logo */}
//         <a
//           href="#hero"
//           className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white"
//         >
//           Growth Studio By Salman<span className="text-violet-500">.</span>
//         </a>

//         {/* Navigation */}
//         <nav className="hidden items-center gap-10 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm font-medium text-zinc-400 transition hover:text-white"
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         {/* CTA */}
//         <a
//           href="#contact"
//           className="hidden rounded-full border border-violet-500/40 bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 md:inline-flex"
//         >
//           Let's Talk
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const navbarHeight = 80;

    const offset =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white"
        >
          Growth Studio By Salman
          <span className="text-violet-500">.</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden rounded-full border border-violet-500/40 bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 md:inline-flex"
        >
          Let's Talk
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="border-b border-white/5 py-5 text-lg text-zinc-300 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-8 inline-flex justify-center rounded-full bg-violet-600 px-6 py-4 font-medium text-white transition hover:bg-violet-500"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;