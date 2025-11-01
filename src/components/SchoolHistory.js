export default function SchoolHistory() {
  const schools = [
    {
      year: "2015 - 2021",
      name: "SDN Jati 1",
      desc: "Saya menempuh pendidikan dasar di SDN Jati 1. Sekolah ini dekat dari rumah, dan selama 6 tahun di sana saya belajar banyak hal berharga yang membentuk dasar semangat belajarku hingga sekarang.",
    },
    {
      year: "2021 - 2024",
      name: "SMPN 3 Probolinggo",
      desc: "Saya melanjutkan pendidikan di SMPN 3 Probolinggo. Di sini, saya selalu termasuk dalam 3 besar kelas dan pernah meraih peringkat 5 besar paralel. Sekolah ini menumbuhkan rasa percaya diri dan disiplin yang kuat.",
    },
    {
      year: "2024 - Sekarang",
      name: "SMKN 1 Probolinggo — Jurusan RPL",
      desc: "Di sinilah aku benar-benar jatuh cinta pada dunia pemrograman dan pengembangan web. Setiap baris kode yang kutulis terasa seperti langkah menuju penciptaan sesuatu yang nyata dari imajinasi. Dari logika yang tertata hingga desain yang menawan, aku menemukan kepuasan saat ide berubah jadi pengalaman digital yang bisa dirasakan banyak orang.",
    },
  ];

  return (
    <section
      id="school"
      className="relative py-24 px-8 bg-gradient-to-b from-[#0a0f2c] via-[#0f255f] to-[#1e3a8a] text-blue-100 overflow-hidden"
    >
      {/* Efek cahaya */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[200px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          Riwayat Sekolah
        </h2>

        <div className="space-y-10">
          {schools.map((s, i) => (
            <div
              key={i}
              className="relative bg-[#0f1b3d]/60 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-blue-500/30 shadow-md hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
            >
              {/* Glow bar di sisi kiri */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-l-lg shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>

              <div className="pl-6 md:pl-8">
                <h3 className="text-2xl font-semibold text-blue-100">{s.name}</h3>
                <p className="text-blue-300 text-sm mb-3">{s.year}</p>
                <p className="text-blue-200/80 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
