function Header() {
  return (
    <header id="top" className="sticky top-0 z-50 w-full border-b border-purple-100/60 bg-white/80 backdrop-blur-md shadow-xs">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <a href="/" className="text-xl font-black text-slate-950 tracking-tight transition-opacity hover:opacity-80">
          <span className="text-purple-600">P</span>roducts{" "}
          <span className="text-purple-600">S</span>tore
        </a>

        <div className="flex items-center gap-6">
  <a  href="#top"className="inline-block text-sm font-semibold text-slate-600 transition-all duration-200 transform origin-center hover:text-purple-600 hover:scale-110">
    Home
  </a>

  <a  href="#products" className="inline-block text-sm font-semibold text-slate-600 transition-all duration-200 transform origin-center hover:text-purple-600 hover:scale-110" >
    Products
  </a>

</div>
      </nav>
    </header>
  );
}

export default Header;
