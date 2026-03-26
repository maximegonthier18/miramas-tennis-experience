import ScrollReveal from "./ScrollReveal";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    date: "Mars 2026",
    title: "Ouverture des inscriptions saison 2026-2027",
    excerpt: "Les inscriptions pour la nouvelle saison sont ouvertes ! Profitez des tarifs préférentiels pour les inscriptions anticipées.",
  },
  {
    date: "Février 2026",
    title: "Tournoi interne de printemps",
    excerpt: "Notre traditionnel tournoi de printemps revient avec des catégories pour tous les niveaux. Inscriptions ouvertes aux adhérents.",
  },
  {
    date: "Janvier 2026",
    title: "Nouveaux cours collectifs adultes",
    excerpt: "De nouveaux créneaux de cours collectifs sont disponibles pour les adultes, le soir en semaine et le samedi matin.",
  },
];

const NewsSection = () => {
  return (
    <section id="actualites" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              <span className="text-gradient">ACTUALITÉS</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                <div className="flex items-center gap-2 text-accent font-body text-sm font-semibold mb-4">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed flex-1">{item.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-accent font-body text-sm font-semibold group-hover:gap-3 transition-all">
                  Lire la suite <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
