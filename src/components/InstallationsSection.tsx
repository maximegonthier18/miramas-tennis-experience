import ScrollReveal from "./ScrollReveal";
import court1Img from "@/assets/court-1.avif";
import court3Img from "@/assets/court-3.avif";

const installations = [
  {
    title: "Terrains en Résine",
    description: "7 terrains en résine dont 2 couverts, offrant des conditions de jeu idéales toute l'année.",
    image: court3Img,
    badge: "7 terrains",
  },
  {
    title: "Terrain en Béton Poreux",
    description: "1 terrain en béton poreux pour varier les surfaces et les plaisirs de jeu.",
    image: court1Img,
    badge: "1 terrain",
  },
];

const InstallationsSection = () => {
  return (
    <section id="installations" className="py-24 bg-muted/50 relative">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${court3Img})`,
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
              8 courts au total pour tous les niveaux de pratique.
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
                  <span className="absolute top-4 right-4 bg-accent text-accent-foreground font-display text-sm px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationsSection;
