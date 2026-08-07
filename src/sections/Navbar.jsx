import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { lenis } from "../lib/lenis";
import logo from "../assets/logo.svg";


const navLinks = [
  { name: "Work", href: "#projects", id: "projects" },
  { name: "Services", href: "#services", id: "services" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-80px 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  const handleNavClick = (e, href) => {
    e.preventDefault();

    lenis.scrollTo(href, {
      offset: -80,
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
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

        {/* <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white"
        >
          Growth Studio By Salman
          <span className="text-violet-500">.</span>
        </a> */}

        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Growth Studio by Salman"
            className="h-15 w-auto transition duration-300 hover:opacity-90"
            draggable="false"
          />
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative pb-2 text-sm font-medium transition ${activeSection === link.id
                ? "text-white"
                : "text-zinc-400 hover:text-white"
                }`}
            >
              {link.name}

              {activeSection === link.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                  className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-violet-500"
                />
              )}
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
                  className={`border-b border-white/5 py-5 text-lg transition ${activeSection === link.id
                    ? "text-violet-400"
                    : "text-zinc-300 hover:text-white"
                    }`}
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