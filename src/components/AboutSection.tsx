import ScrollReveal from "./ScrollReveal";
import { Trophy, Users, Heart, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "300+", label: "Adhérents" },
  { icon: Trophy, value: "25+", label: "Années d'expérience" },
  { icon: Star, value: "8", label: "Terrains" },
  { icon: Heart, value: "100%", label: "Passion" },
];

const AboutSection = () => {
  return (
    <section id="club" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              NOTRE <span className="text-gradient">CLUB</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <ScrollReveal>
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                UN CLUB AU CŒUR DE LA PROVENCE
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Situé à Miramas, aux portes de Marseille, le Tennis Club de Miramas
                est bien plus qu'un simple club de tennis. C'est un lieu de vie où
                se mêlent sport, convivialité et esprit de compétition.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Que vous soyez débutant ou compétiteur confirmé, notre club vous
                accueille dans un cadre exceptionnel avec des installations
                de qualité et un encadrement professionnel. Venez partager notre
                passion pour le tennis !
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-3xl text-foreground">{stat.value}</div>
                  <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
