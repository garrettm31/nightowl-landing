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
          <div className="h-8 w-8 rounded-lg bg-owl-500 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
              {/* Ear tufts */}
              <path d="M8 4L10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M24 4L22 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              {/* Head */}
              <ellipse cx="16" cy="17" rx="10" ry="11" fill="white" />
              {/* Left eye ring */}
              <circle cx="12" cy="15" r="4.5" fill="#635bff" />
              <circle cx="12" cy="15" r="2.5" fill="white" />
              <circle cx="12.5" cy="14.5" r="1.5" fill="#1a1a2e" />
              {/* Right eye ring */}
              <circle cx="20" cy="15" r="4.5" fill="#635bff" />
              <circle cx="20" cy="15" r="2.5" fill="white" />
              <circle cx="20.5" cy="14.5" r="1.5" fill="#1a1a2e" />
              {/* Beak */}
              <path d="M14.5 19.5L16 22L17.5 19.5" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.5" strokeLinejoin="round" />
            </svg>
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
