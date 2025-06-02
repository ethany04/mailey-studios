import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#3c3883] to-[#828bc5] py-6 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <div className="text-white text-sm">© 2025 Mailey Studios</div>

        {/* Center - Social Icons */}
        <div className="flex items-center space-x-6">
          <Link
            href="https://instagram.com"
            className="text-white hover:text-white/80 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-white hover:text-white/80 transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-white hover:text-white/80 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:hello@maileystudios.com"
            className="text-white hover:text-white/80 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>

        {/* Right - Site Credit */}
        <div className="text-white text-sm">
          Site credit |{" "}
          <Link
            href="https://linkedin.com/in/ethanzyu"
            className="hover:text-white/80 transition-colors duration-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ethan Yu
          </Link>
        </div>
      </div>
    </footer>
  );
}
