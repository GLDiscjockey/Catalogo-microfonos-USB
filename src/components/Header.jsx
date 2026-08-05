import logo from "../assets/logos/usb.svg";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#212121]/95 backdrop-blur border-b border-[#333]">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

      <div className="flex items-center gap-4">

  <img
    src={logo}
    alt="Logo Universidad de San Buenaventura"
    className="w-14 h-14 object-contain"
  />

  <div>

            <h1 className="text-xl font-bold text-white">
              Catálogo de Micrófonos
            </h1>

            <p className="text-sm text-gray-400">
              Laboratorio de Audio · USB Medellín
            </p>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;