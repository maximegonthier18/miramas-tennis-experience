import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le Club", href: "#club" },
  { label: "Installations", href: "#installations" },
  { label: "Équipes", href: "#equipes" },
  { label: "Actualités", href: "#actualites" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3">
          <img src={logo} alt="TC Miramas" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-display text-2xl text-primary-foreground tracking-wider hidden sm:block">
            TC MIRAMAS
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
