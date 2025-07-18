import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-[#ffffff] to-[#f9f9f8] py-6 px-4 md:px-8 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <div className="text-black text-sm">© 2025 Mailey Studios</div>

        {/* Center - Social Icons */}
        <div className="flex items-center space-x-6">
          <Link
            href="https://instagram.com/mailey.studios"
            className="text-black hover:text-black/80 transition-colors duration-300"
            aria-label="Instagram"
            target="_blank"
          >
            <Instagram size={20} />
          </Link>

          <Link
            href="mailto:maileystudios@gmail.com"
            className="text-black hover:text-black/80 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>

        {/* Right - Site Credit */}
        <div className="text-black text-sm">
          Site credit |{" "}
          <Link
            href="https://linkedin.com/in/ethanzyu"
            className="hover:text-black/80 transition-colors duration-300 underline"
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
