import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="TC Miramas" className="h-10 w-10 rounded-full" />
            <span className="font-display text-xl text-primary-foreground tracking-wider">
              TC MIRAMAS
            </span>
            <a
              href="https://www.instagram.com/tcmiramas/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Instagram TC Miramas"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["Accueil", "Le Club", "Installations", "Équipes", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s/g, "").replace("é", "e")}`}
                className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Tennis Club de Miramas. Tous droits réservés.
          </p>
          <p className="font-body text-xs text-primary-foreground/30 mt-2">
            Created by{" "}
            <Link to="/createur" className="hover:text-accent transition-colors">
              Maxime Gonthier
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
