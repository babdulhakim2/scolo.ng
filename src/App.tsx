import { motion } from "motion/react";
import { Terminal, ArrowRight, Landmark, Mic, Globe, LayoutGrid, Cpu } from "lucide-react";
import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CookieConsentBanner, { openCookieSettings } from "./components/CookieConsentBanner";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";

const ProductImage = ({ src, alt, location }: { src: string; alt: string; location: string }) => {
  return (
    <div className="relative w-full aspect-video bg-surface-container-lowest overflow-hidden mb-6 group/img border border-outline-variant/10">
      <motion.img
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105 grayscale"
      />

      {/* Technical Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-tighter opacity-60 text-white bg-black/40 px-2 py-1 backdrop-blur-sm">
          LIVE_FEED // {location} // {new Date().toLocaleDateString()}
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-tighter opacity-60 text-white bg-black/40 px-2 py-1 backdrop-blur-sm">
          ENCRYPTED_LEDGER // SCOLO_V2.5
        </div>
        {/* Subtle corner marks */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/60" />
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full animate-[scan_4s_linear_infinite]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-80 pointer-events-none" />
      
    </div>
  );
};

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
    <div className="flex items-center gap-3">
      <Terminal className="text-primary w-6 h-6" />
      <Link to="/" className="text-2xl font-bold font-serif text-primary tracking-tight hover:opacity-90 transition-opacity">
        SCOLO AI
      </Link>
    </div>
    <nav className="hidden md:flex gap-8 items-center">
      {["Products", "Services", "Traction"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
        >
          {item}
        </a>
      ))}
      <a
        href="#contact"
        className="px-6 py-2 bg-primary text-on-primary font-bold hover:bg-primary-container transition-colors"
      >
        Contact
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden pt-20">
    <div className="absolute inset-0 technical-grid pointer-events-none" />
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-8xl leading-tight font-extrabold tracking-tight text-white"
        >
          We build AI that works in <span className="italic text-primary">real conditions.</span>
        </motion.h1>
      </div>
      <div className="md:col-span-4 pb-4">
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md"
        >
          A technical team shipping AI products and providing deep expertise since 2025.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-bold text-lg hover:bg-primary-container transition-colors"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-outline text-white font-bold text-lg hover:bg-surface-container-high transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="mt-16 w-full h-[350px] bg-surface-container-low overflow-hidden relative"
    >
      <img
        src="https://picsum.photos/seed/lagos-skyline-brutalist/1920/1080?grayscale"
        alt="Technical abstraction"
        className="w-full h-full object-cover mix-blend-luminosity"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
    </motion.div>
  </section>
);

const Expertise = () => {
  const services = [
    { id: "01", title: "Custom AI development", desc: "Full-stack intelligence integration for modern enterprise workflows.", icon: Cpu },
    { id: "02", title: "African LLM Fine-tuning", desc: "Deep optimization for Hausa, Yoruba, Igbo, and Pidgin dialects.", icon: Globe },
    { id: "03", title: "Data Annotation", desc: "High-fidelity localized datasets built by subject matter experts.", icon: LayoutGrid },
    { id: "04", title: "Voice & WhatsApp Agents", desc: "Automated customer service via the platforms Nigerians use most.", icon: Mic },
    { id: "05", title: "Agentic AI Systems", desc: "Autonomous workflows that execute complex multi-step reasoning.", icon: Terminal },
    { id: "06", title: "Government AI Solutions", desc: "Large-scale project monitoring and public service automation.", icon: Landmark },
  ];

  return (
    <section id="services" className="bg-inverse-surface text-inverse-on-surface py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:row justify-between items-start mb-20 gap-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">Expertise for the Sovereign Ledger</h2>
          <p className="text-xl max-w-md opacity-80">
            Deployment-first AI engineering designed for Nigeria's unique digital infrastructure and linguistic landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-outline-variant/20">
          {services.map((s, i) => (
            <div 
              key={s.id} 
              className={`p-10 border-outline-variant/20 hover:bg-white transition-colors group
                ${i % 3 !== 2 ? 'md:border-r' : ''} 
                ${i >= 3 ? 'border-t' : ''}`}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container mb-6 block">{s.id}</span>
              <h3 className="font-serif text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    {
      name: "INSPECTA.NG",
      tag: "LIVE ACROSS 34 LGAs",
      desc: "Government project monitoring AI, adopted by Katsina State government to track public works in real-time.",
      imageSrc: "/inspecta.ng.png",
      location: "KATSINA STATE",
      link: "#",
      borderColor: "border-primary",
      icon: Landmark,
      accent: "text-primary"
    },
    {
      name: "Scolo Live",
      tag: "LIVE",
      desc: "Enterprise automation platform for credit tracking, automated reminders, and seamless back-office requisition workflows.",
      imageSrc: "/scolo.live.png",
      location: "LAGOS BUSINESS DISTRICT",
      link: "#",
      borderColor: "border-white/30",
      icon: Mic,
      accent: "text-white"
    },
    {
      name: "Scolo Online",
      tag: "IN-MARKET",
      desc: "Scalable AI web-agent platforms for enterprise automation. Transforming browser tasks into automated flows.",
      imageSrc: "/scolo.online.png",
      location: "VICTORIA ISLAND",
      link: "#",
      borderColor: "border-outline",
      icon: Globe,
      accent: "text-white"
    }
  ];

  return (
    <section id="products" className="bg-surface py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-serif text-5xl md:text-7xl font-extrabold text-white mb-4">In-Market Protocols</h2>
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Live deployments across the federation</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div 
              key={p.name}
              className={`bg-surface-container-low p-8 flex flex-col min-h-[600px] border-b-4 ${p.borderColor} group hover:bg-surface-container-high transition-all`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`px-3 py-1 font-mono text-[10px] font-bold ${p.accent === 'text-primary' ? 'bg-primary text-on-primary' : 'bg-white/10 text-white'}`}>
                  {p.tag}
                </span>
                <p.icon className="text-outline w-6 h-6" />
              </div>
              
              <ProductImage src={p.imageSrc} alt={p.name} location={p.location} />

              <h3 className={`font-serif text-4xl font-bold mb-4 ${p.accent}`}>{p.name}</h3>
              <p className="text-on-surface-variant mb-auto">{p.desc}</p>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <a href={p.link} className={`flex items-center gap-2 font-mono text-sm uppercase tracking-widest ${p.accent} group-hover:gap-4 transition-all`}>
                  Protocol Entry <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Traction = () => (
  <section id="traction" className="py-32 bg-surface-container-lowest relative overflow-hidden">
    <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
      <img 
        src="https://picsum.photos/seed/data/1000/1000?grayscale" 
        alt="Data abstraction" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-8 md:px-24 relative z-10">
      <h2 className="font-serif text-4xl md:text-6xl font-bold mb-20 text-white border-l-8 border-primary pl-8">Network Traction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { val: "03", label: "Live Products Deployed" },
          { val: "34", label: "LGAs Covered via Inspecta" },
          { val: "8M+", label: "Citizen Coverage" },
          { val: "2026", label: "State Partnership signed March" },
        ].map((stat) => (
          <div key={stat.label}>
            <span className="font-serif text-7xl font-extrabold text-primary block mb-2">{stat.val}</span>
            <p className="font-mono text-xs uppercase tracking-widest opacity-60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-surface py-32 px-8 md:px-24 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-serif text-4xl md:text-6xl font-extrabold mb-8 text-white">Ready to engineer your edge?</h2>
      <p className="text-xl text-on-surface-variant mb-12">
        For custom AI development, consulting, and government solutions inquiries.
      </p>
      <div className="inline-block border-b-2 border-primary pb-2">
        <a href="mailto:hakim@scolo.ng" className="font-serif text-3xl md:text-5xl font-bold text-primary hover:opacity-80 transition-opacity">
          hakim@scolo.ng
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full px-8 md:px-24 py-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-surface border-t border-outline-variant/10">
    <div className="flex flex-col items-center md:items-start gap-4">
      <div className="text-xl font-bold font-serif text-primary">SCOLO AI</div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
        © 2024 SCOLO AI. Engineered for the Sovereign Ledger.
      </p>
    </div>
    <nav className="flex flex-wrap justify-center gap-6">
    
      <a href="#services" className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary underline transition-all">
        Services
      </a>
    
      <Link to="/privacy" className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary underline transition-all">
        Privacy
      </Link>
      <Link to="/terms" className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary underline transition-all">
        Terms
      </Link>
     
    </nav>
  </footer>
);

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);
  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Products />
        <Traction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-surface text-white flex items-center justify-center px-8">
      <div className="max-w-xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">404</p>
        <h1 className="font-serif text-5xl font-extrabold tracking-tight mb-6">Page not found</h1>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold hover:bg-primary-container transition-colors">
          Back to home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsentBanner />
    </>
  );
}
