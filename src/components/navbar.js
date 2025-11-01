export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0a1a3f]/90 via-[#0f255f]/80 to-transparent backdrop-blur-md text-blue-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-bold tracking-wide text-blue-200 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
          Airin’s Portfolio
        </h1>
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          <li><a href="#hero" className="hover:text-blue-400 transition-all">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-all">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-all">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-all">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
