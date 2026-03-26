import ScrollReveal from "./ScrollReveal";
import teamsImg from "@/assets/teams.jpg";
import { Users, Award, Zap } from "lucide-react";

const teams = [
  {
    icon: Zap,
    title: "École de Tennis",
    subtitle: "Jeunes (5-18 ans)",
    description: "Formation complète pour les jeunes passionnés, du mini-tennis à la compétition.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Users,
    title: "Adultes Loisir",
    subtitle: "Tous niveaux",
    description: "Cours collectifs et individuels pour progresser à votre rythme dans une ambiance conviviale.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Award,
    title: "Compétition",
    subtitle: "Équipes engagées",
    description: "Nos équipes représentent le club dans les championnats régionaux et nationaux.",
    color: "from-primary/20 to-primary/5",
  },
];

const TeamsSection = () => {
  return (
    <section id="equipes" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              NOS <span className="text-gradient">ÉQUIPES</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Team image */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden mb-16 h-72 md:h-96">
            <img src={teamsImg} alt="Équipes TC Miramas" loading="lazy" className="w-full h-full object-cover" width={1280} height={720} />
            <div className="absolute inset-0 hero-gradient opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-display text-4xl md:text-6xl text-primary-foreground text-center">
                REJOIGNEZ L'AVENTURE
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className={`bg-gradient-to-b ${team.color} rounded-2xl p-8 border border-border/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group h-full`}>
                <team.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl text-foreground mb-1">{team.title}</h3>
                <p className="font-body text-sm text-accent font-semibold mb-4">{team.subtitle}</p>
                <p className="font-body text-muted-foreground leading-relaxed">{team.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
