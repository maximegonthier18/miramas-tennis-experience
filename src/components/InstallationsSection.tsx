import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/hero-tennis.jpg";
import clubhouseImg from "@/assets/clubhouse.jpg";

const installations = [
  {
    title: "Terrains en terre battue",
    description: "6 terrains en terre battue entretenus quotidiennement pour des conditions de jeu optimales.",
    image: heroImg,
  },
  {
    title: "Club House",
    description: "Un espace convivial avec terrasse, bar et vestiaires modernes pour se retrouver après les matchs.",
    image: clubhouseImg,
  },
];

const InstallationsSection = () => {
  return (
    <section id="installations" className="py-24 bg-muted/50 relative">
      {/* Parallax background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              NOS <span className="text-gradient">INSTALLATIONS</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto rounded-full" />
            <p className="font-body text-muted-foreground mt-6 max-w-xl mx-auto">
              Des installations de qualité pour tous les niveaux de pratique.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {installations.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="font-body text-center text-muted-foreground mt-12 italic">
            Plus de photos et détails à venir prochainement...
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstallationsSection;
