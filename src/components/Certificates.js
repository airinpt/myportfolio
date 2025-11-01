export default function Certificate() {
  return (
    <section
      id="certificate"
      className="relative py-24 px-8 bg-gradient-to-tr from-[#0a0f2c] via-[#0f255f] to-[#1e40af] text-blue-100"
    >
      {/* Efek cahaya */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-blue-700/25 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          Sertifikat & Pencapaian
        </h2>
        <p className="text-blue-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Beberapa sertifikat yang aku raih selama menjadi siswa, baik di bidang RPL maupun Umum.
        </p>

        {/* Grid sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sertifikat 1 */}
          <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
            <img
              src="/img/sertifppatk-certificate.jpg"
              alt="Sertifikat 1"
              className="w-full h-52 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-blue-300">PPATK Mengajar</h3>
              <p className="text-sm text-blue-200/70 mt-2">
                Diperoleh setelah mengikuti Duta PPATK Mengajar 2024 dengan materi literasi keuangan dan anti-pencucian uang.
              </p>
            </div>
          </div>

          {/* Sertifikat 2 */}
          <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
            <img
              src="/img/sertifacp1-certificate.jpg"
              alt="Sertifikat 2"
              className="w-full h-52 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-blue-300">ACP #1 - Hard Fundamental</h3>
              <p className="text-sm text-blue-200/70 mt-2">
                Sertifikat Axioo Class Program "Hardware Fundamental".
              </p>
            </div>
          </div>

          {/* Sertifikat 3 */}
          <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
            <img
              src="/img/certificate3.jpg"
              alt="Sertifikat 3"
              className="w-full h-52 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-blue-300">Coming Soon</h3>
              <p className="text-sm text-blue-200/70 mt-2">
                ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
