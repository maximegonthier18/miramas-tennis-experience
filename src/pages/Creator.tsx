import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Creator = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Retour au site
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
          CRÉATEUR DU SITE
        </h1>
        <div className="w-16 h-1 accent-gradient mx-auto rounded-full mb-8" />

        <h2 className="font-display text-2xl text-foreground mb-4">Maxime Gonthier</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          Développeur web passionné, spécialisé dans la création de sites modernes
          et performants. Ce site a été conçu avec soin pour refléter l'identité
          et les valeurs du Tennis Club de Miramas.
        </p>
        <p className="font-body text-sm text-muted-foreground/60">
          Design & Développement Web
        </p>
      </div>
    </div>
  );
};

export default Creator;
