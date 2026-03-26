import ScrollReveal from "./ScrollReveal";
import courtImg from "@/assets/court-2.avif";
import { Users, Award, Zap, Shield, GraduationCap, Briefcase } from "lucide-react";

const dirigeants = [
  { name: "Gregory BOIS", role: "Président" },
  { name: "Franck DIOLOT", role: "Secrétaire Général" },
  { name: "Isabelle BLANC", role: "Trésorier Général" },
];

const pedagogique = [
  { name: "Nicolas FILLIT", role: "Entraîneur" },
  { name: "Julien BLANC", role: "Enseignant tous publics" },
  { name: "Salomé CHERRIER", role: "DE stagiaire" },
];

const administratif = [
  { name: "Sandrine VILLARD", role: "Secrétaire" },
  { name: "Sophie PERDIGON", role: "Bénévole tournoi" },
];

const teamCategories = [
  {
    icon: Shield,
    title: "Équipe Dirigeante",
    members: dirigeants,
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "Équipe Pédagogique",
    members: pedagogique,
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Briefcase,
    title: "Équipe Administrative",
    members: administratif,
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },
];

const TeamsSection = () => {
  return (
    <section id="equipes" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              NOTRE <span className="text-gradient">ÉQUIPE</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Team image */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden mb-16 h-72 md:h-96">
            <img src={courtImg} alt="Équipe TC Miramas" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-display text-4xl md:text-6xl text-primary-foreground text-center drop-shadow-lg">
                REJOIGNEZ L'AVENTURE
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {teamCategories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className={`bg-gradient-to-b ${cat.color} rounded-2xl p-8 border border-border/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group h-full`}>
                <cat.icon className={`w-10 h-10 ${cat.iconColor} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="font-display text-2xl text-foreground mb-6">{cat.title}</h3>
                <div className="space-y-4">
                  {cat.members.map((member, j) => (
                    <div key={j} className="border-l-2 border-accent/30 pl-4">
                      <p className="font-display text-lg text-foreground">{member.name}</p>
                      <p className="font-body text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
