export function Footer() {
  return (
    <footer className="border-t border-night-800/80 py-10 px-5 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-night-500">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-owl-500 flex items-center justify-center text-[10px] font-bold text-white">
            N
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
