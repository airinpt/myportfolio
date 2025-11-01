export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-8 bg-gradient-to-br from-[#0a0f2c] via-[#0f255f] to-[#1e3a8a] text-blue-100">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-blue-600/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-50 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          Proyek Terbaru
        </h2>
        <p className="mt-3 text-blue-200/80 max-w-xl mx-auto">
          Kumpulan proyek yang pernah aku buat dengan semangat bereksperimen dan menciptakan sesuatu yang berarti.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card contoh */}
        <div className="bg-[#1e3a8a]/30 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]">
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Website Portfolio</h3>
          <p className="text-blue-200/80">Website pribadi yang menampilkan karya dan perjalanan belajarku di dunia RPL.</p>
        </div>
      </div>
    </section>
  );
}
