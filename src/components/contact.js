export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-8 bg-gradient-to-tr from-[#0a0f2c] via-[#0f255f] to-[#1e40af] text-blue-100">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-700/25 blur-[180px] rounded-full -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          Hubungi Aku
        </h2>
        <p className="text-blue-200/80 mb-8 max-w-xl mx-auto">
          Tertarik berkolaborasi atau sekadar berbagi ide kreatif? Kirim pesan — aku senang berbincang tentang teknologi, desain, dan hal-hal seru lainnya!
        </p>

        <a href="mailto:airin@example.com" className="inline-block px-10 py-4 bg-blue-600/90 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/40 transition-all">
          Kirim Email
        </a>
      </div>
    </section>
  );
}
