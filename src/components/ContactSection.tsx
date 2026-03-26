import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
              <span className="text-gradient">CONTACT</span>
            </h2>
            <div className="w-20 h-1 accent-gradient mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <ScrollReveal>
            <div>
              <h3 className="font-display text-3xl text-foreground mb-6">NOUS TROUVER</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">Adresse</p>
                    <p className="font-body text-muted-foreground">Miramas, Bouches-du-Rhône (13)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">Téléphone</p>
                    <p className="font-body text-muted-foreground">À venir</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground">Email</p>
                    <p className="font-body text-muted-foreground">À venir</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Nom</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full accent-gradient text-accent-foreground font-body font-bold px-8 py-4 rounded-lg text-lg tracking-wide hover:scale-[1.02] transition-transform duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                {submitted ? "Message envoyé ✓" : (
                  <>ENVOYER <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
