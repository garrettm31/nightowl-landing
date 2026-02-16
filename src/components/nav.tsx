"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-night-950/80 border-b border-night-800/50">
      <div className="flex items-center justify-between px-5 md:px-6 py-4 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-owl-500 flex items-center justify-center text-sm font-bold text-white">
            N
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-white">
            NightOwl
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-night-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href="#pricing">Get Started</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-night-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-night-800/50 bg-night-950/95 backdrop-blur-md px-5 pb-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] text-night-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href="#pricing" className="mt-3 w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
