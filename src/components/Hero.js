export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('img/bg-hero.jpg')" }}
      />
      
      {/* Gradient overlay supaya teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="z-10 text-center px-6 md:px-12">
        <h2 className="text-sm md:text-base uppercase tracking-widest opacity-90">
          Welcome, My Portfolio guys 👋
        </h2>

        <h2 className="mt-3 text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          Airin Yenita Putri
        </h2>

        <p className="mt-5 max-w-2xl mx-auto leading-relaxed text-white/90">
          Saya siswa kelas XI dari jurusan Rekayasa Perangkat Lunak di SMKN 1. 
          Aku tertarik dengan dunia teknologi, desain antarmuka, dan pengembangan web modern. 
          Setiap baris kode bagiku adalah karya — bukan sekadar perintah mesin.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600/90 hover:bg-blue-700 text-white transition-all font-semibold shadow-md">
            Lihat Proyekku
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-blue-500/60 hover:bg-white/20 text-white transition-all font-semibold">
            Hubungi Aku
          </a>
        </div>
      </div>
    </section>
  )
}
