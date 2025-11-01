export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-8 bg-gradient-to-tr from-[#0a0f2c] via-[#0f255f] to-[#1e40af] text-blue-100"
    >
      {/* Efek cahaya */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-700/25 blur-[180px] rounded-full -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Foto di kiri */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.3)] border border-blue-400/30 flex-shrink-0">
          <img
            src="/img/fotome-about.jpg"
            alt="Foto Airin Yenita Putri"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Teks di kanan */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Tentang Aku
          </h2>
          <p className="text-blue-200/80 leading-relaxed text-lg">
            Halo! Aku <span className="font-semibold text-blue-300">Airin Yenita Putri</span>,
            siswa kelas XI SMKN 1 jurusan <b>Rekayasa Perangkat Lunak (RPL)</b>.
            Aku punya semangat besar buat belajar dan menciptakan sesuatu dari dunia digital —
            entah itu tampilan web yang estetik, aplikasi yang bermanfaat,
            atau pengalaman interaktif yang bikin orang betah.
          </p>
          <p className="mt-4 text-blue-300/70">
            Di luar dunia coding, aku suka desain UI, menulis, dan eksplorasi ide baru
            yang bisa nggabungin seni dengan logika. Aku percaya masa depan teknologi
            nggak cuma soal mesin, tapi juga tentang rasa dan manusia di baliknya.
          </p>
        </div>
      </div>
    </section>
  );
}
