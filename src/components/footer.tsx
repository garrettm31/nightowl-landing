export function Footer() {
  return (
    <footer className="border-t border-night-800/80 py-10 px-5 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-night-500">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-owl-500 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5">
              <ellipse cx="16" cy="17" rx="10" ry="11" fill="white" />
              <path d="M7 13 L11 7 L16 2 Q19 0 22 3 Q27 7 25 12 L25 13 Q16 10 7 13 Z" fill="#1e3a8a" />
              <circle cx="25.5" cy="12" r="1.8" fill="white" />
              <circle cx="12" cy="15" r="4.5" fill="#10b981" />
              <circle cx="12" cy="15" r="2.5" fill="white" />
              <circle cx="12.5" cy="14.5" r="1.5" fill="#1a1a2e" />
              <circle cx="20" cy="15" r="4.5" fill="#10b981" />
              <circle cx="20" cy="15" r="2.5" fill="white" />
              <circle cx="20.5" cy="14.5" r="1.5" fill="#1a1a2e" />
              <path d="M14.5 19.5L16 22L17.5 19.5" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.5" strokeLinejoin="round" />
            </svg>
          </div>
          <span>&copy; {new Date().getFullYear()} NightOwl</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-night-300 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-night-300 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-night-300 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
