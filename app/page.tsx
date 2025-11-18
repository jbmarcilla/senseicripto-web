import Image from "next/image";

export default function Home() {
  // Reemplaza este número con tu número de WhatsApp (incluye código de país sin +)
  const whatsappNumber = "573001234567"; // Ejemplo: 57 para Colombia
  const whatsappMessage = "Hola! Quiero obtener el ebook de SenseiCripto";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 relative overflow-hidden">
      {/* Clouds Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cloud 1 */}
        <div className="absolute top-10 left-10 w-32 h-16 bg-white/40 rounded-full blur-xl"></div>
        <div className="absolute top-12 left-20 w-24 h-12 bg-white/50 rounded-full blur-lg"></div>

        {/* Cloud 2 */}
        <div className="absolute top-32 right-20 w-40 h-20 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute top-36 right-32 w-28 h-14 bg-white/40 rounded-full blur-lg"></div>

        {/* Cloud 3 */}
        <div className="absolute top-64 left-1/4 w-36 h-18 bg-white/35 rounded-full blur-xl"></div>
        <div className="absolute top-68 left-1/3 w-24 h-12 bg-white/45 rounded-full blur-lg"></div>

        {/* Cloud 4 */}
        <div className="absolute bottom-40 right-10 w-32 h-16 bg-white/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-44 right-24 w-20 h-10 bg-white/50 rounded-full blur-lg"></div>

        {/* Cloud 5 */}
        <div className="absolute top-1/2 left-10 w-28 h-14 bg-white/35 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-20 w-20 h-10 bg-white/45 rounded-full blur-lg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 md:py-12">
        <div className="max-w-2xl w-full">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="SenseiCripto Logo"
                width={240}
                height={240}
                priority
                className="mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Manuscript Card - Estilo pergamino/manuscrito */}
            <div className="relative bg-gradient-to-br from-yellow-600/20 via-amber-400/30 to-yellow-700/25 border-4 border-amber-900/40 rounded-2xl p-8 md:p-10 shadow-2xl transform rotate-[-0.5deg]"
                 style={{
                   backgroundColor: '#d4a574',
                   backgroundImage: `repeating-linear-gradient(
                     0deg,
                     transparent,
                     transparent 34px,
                     rgba(139, 90, 43, 0.12) 34px,
                     rgba(139, 90, 43, 0.12) 35px
                   )`
                 }}>

              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-900/20"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-900/20"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-900/20"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-900/20"></div>

              {/* Red Stamp/Seal */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-red-600/80 border-2 border-red-800 flex items-center justify-center rotate-12 shadow-lg">
                <span className="text-white text-xs font-bold">Sensei<br/>秘密</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-800/20 border-2 border-amber-900/50 rounded-lg mb-7 shadow-sm">
                <span className="text-3xl">📜</span>
                <span className="text-amber-950 text-base font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                  Manuscrito Exclusivo
                </span>
              </div>

              {/* Headline - Estilo manuscrito */}
              <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-5 leading-tight"
                  style={{ fontFamily: 'Georgia, serif', textShadow: '0 1px 2px rgba(0,0,0,0.15)' }}>
                Los Secretos para{" "}
                <span className="text-red-900 underline decoration-wavy decoration-red-800/50">
                  Invertir en Criptomonedas
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-amber-950/85 mb-8 italic" style={{ fontFamily: 'Georgia, serif' }}>
                "Aprende las enseñanzas ancestrales adaptadas al mercado cripto moderno"
              </p>

              {/* Divider */}
              <div className="w-24 h-1 bg-amber-800/30 mx-auto mb-8"></div>

              {/* Features List - Estilo lista manuscrita */}
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-red-800 text-2xl font-bold mt-0.5">✦</span>
                  <span className="text-amber-950 text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    Estrategias probadas de inversión
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-800 text-2xl font-bold mt-0.5">✦</span>
                  <span className="text-amber-950 text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    Gestión de riesgos efectiva
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-800 text-2xl font-bold mt-0.5">✦</span>
                  <span className="text-amber-950 text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    Análisis técnico fundamental
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-800 text-2xl font-bold mt-0.5">✦</span>
                  <span className="text-amber-950 text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    Seguridad y protección de activos
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-24 h-1 bg-amber-800/30 mx-auto mb-8"></div>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-5 rounded-xl text-xl font-bold hover:shadow-2xl hover:shadow-green-600/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] border-2 border-green-800"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Recibir Manuscrito por WhatsApp
              </a>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-3 mt-6 text-sm text-amber-950/70">
                <span className="flex items-center gap-1">
                  <span className="text-lg">🔒</span>
                  Sabiduría confiable
                </span>
                <span className="text-amber-800">•</span>
                <span className="flex items-center gap-1">
                  <span className="text-lg">⚡</span>
                  Respuesta inmediata
                </span>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t-2 border-amber-900/30">
                <p className="text-amber-950/70 text-base italic" style={{ fontFamily: 'Georgia, serif' }}>
                  - Tu Sensei en Criptomonedas
                </p>
              </div>
            </div>

            {/* Footer */}
            <p className="text-sky-900/70 text-xs mt-6 px-4 drop-shadow-sm">
              © 2024 SenseiCripto • La inversión en criptomonedas conlleva riesgos. Invierte responsablemente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
