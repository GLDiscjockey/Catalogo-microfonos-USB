function Footer() {
  return (
    <footer className="mt-20 border-t border-[#3A3A3A] bg-[#1B1B1B]">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h2 className="text-lg font-semibold text-white">
          Catálogo de Micrófonos
        </h2>

        <p className="text-gray-400 mt-2">
          Laboratorio de Audio
        </p>

        <p className="text-gray-500 text-sm mt-1">
          Universidad de San Buenaventura Medellín
        </p>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            Desarrollado por{" "}
            <span className="text-gray-300 font-medium">
              José Miguel Gómez
            </span>
          </p>

          <p className="mt-1">
            Ingeniería de Sonido · 2026
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;