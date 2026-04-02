import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface text-white">
      <header className="sticky top-0 z-50 border-b border-outline-variant/10 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Terminal className="text-primary w-5 h-5" />
            <span className="text-lg font-bold font-serif text-primary tracking-tight">SCOLO AI</span>
          </Link>
          <nav className="flex items-center gap-5">
            <Link to="/privacy" className="font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="font-serif text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">{title}</h1>
        <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-invert max-w-none">
          <div className="bg-surface-container-low border border-outline-variant/10 p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

