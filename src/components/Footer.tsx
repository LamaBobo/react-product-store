function Footer() {
  return (
   
    <footer className="mt-16 border-t border-purple-200/80 bg-slate-100 shadow-[0_-4px_15px_rgba(0,0,0,0.02)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center gap-1 sm:items-start sm:gap-0">
          <p className="text-lg font-black text-slate-950 tracking-tight leading-none opacity-80">
            <span className="text-purple-600">P</span>roducts{" "}
            <span className="text-purple-600">S</span>tore
            <span className="text-purple-600">.</span>
          </p>
          <p className="text-[11px] font-medium text-slate-500 mt-0.5">
            © {new Date().getFullYear()} Products Store. All rights reserved.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex items-center text-xs font-bold text-slate-600"
        >
          <a  href="#products" className="group hover:text-purple-600 transition-colors duration-200 flex items-center gap-1" >
            Back to top 
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:animate-bounce">
              ↑
            </span>
          </a>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
