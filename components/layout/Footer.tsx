import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
import FadeContent from "../animated/fadecontent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FadeContent blur={true} duration={800} threshold={0.2}>
      <footer className="relative overflow-x-hidden border-t border-white/10 ">
        <div className="container relative mx-auto px-4 pb-6 pt-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="min-w-0 space-y-4">
              <Link
                href="/"
                className="group inline-flex max-w-full gap-3 rounded-2xl py-4"
              >
                <span>
                  <h1 className="break-words text-3xl uppercase leading-tight tracking-[0.12em] text-amber-300 sm:text-4xl lg:text-[2.6rem]">
                    Ata Khatri
                  </h1>
                </span>
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-white/75">
                Crafting thoughtful web experiences with clean code, bold UI,
                and animation that feels intentional.
              </p>

              <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-200">
                <Sparkles className="h-3.5 w-3.5" />
                Open to freelance and full-time opportunities
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-amber-400 hover:text-black"
                >
                  Dashboard
                </Link>
                <Link
                  href="/gallery"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-amber-400 hover:text-black"
                >
                  Gallery
                </Link>
                <Link
                  href="/#projects"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-amber-400 hover:text-black"
                >
                  Projects
                </Link>
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Connect
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:atakhatri905@gmail.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-black"
                  aria-label="Send email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/atakhatri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-black"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ata-khatri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-black"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/ata_khatri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-black"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>

              <a
                href="mailto:atakhatri905@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200 transition-all duration-300 hover:bg-amber-400 hover:text-black"
              >
                Let&apos;s build together
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/60 md:flex-row">
            <p>© {year} Ata Khatri. All rights reserved.</p>
            <a
              href="#top"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 transition-all duration-300 hover:bg-amber-400 hover:text-black"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
}
