export const Footer = () => {
  return (
    <>
      <div className="w-full bg-white outline outline-1 outline-gray-200">
        <div className="mx-auto w-full">
          <div className="md:flex md:flex-row grid grid-cols-2 gap-6 px-12 md:justify-center md:px-72 py-8">
            <div id="Komunitas" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500">KOMUNITAS</h3>
              <div className="flex flex-col gap-2 pt-2">
                <a className="text-sm text-gray-400">Youtube</a>
                <a className="text-sm text-gray-400">Instagram</a>
                <a className="text-sm text-gray-400">Facebook</a>
                <a className="text-sm text-gray-400">Team Gaming</a>
                <a className="text-sm text-gray-400">Blog</a>
              </div>
            </div>
            <div id="Dukungan" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500">DUKUNGAN</h3>
              <div className="flex flex-col gap-2 pt-2">
                <a className="text-sm text-gray-400">Customer Service Online</a>
                <a className="text-sm text-gray-400">Lokasi Service</a>
                <a className="text-sm text-gray-400">Garansi</a>
                <a className="text-sm text-gray-400">Layanan Jarak Jauh</a>
              </div>
            </div>
            <div id="Berita" className="md:w-1/5 w-full">
              <h3 className="text-lg font-bold text-gray-500">BERITA</h3>
              <div className="flex flex-col gap-2 pt-2">
                <a className="text-sm text-gray-400">What's New</a>
                <a className="text-sm text-gray-400">Awards</a>
              </div>
            </div>
            <div id="TentangKami" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500">TENTANG KAMI</h3>
              <div className="flex flex-col gap-2 pt-2">
                <a className="text-sm text-gray-400">Tentang MSI</a>
                <a className="text-sm text-gray-400">Visi Dan Misi</a>
              </div>
            </div>
            <div id="Address" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500">ALAMAT</h3>
              <div className="flex flex-col gap-2 pt-2 w-56">
                <a className="text-sm text-gray-400">
                  Kp.Kebon Kelapa, RT.02/RW.11, Singasari, Kec.Jonggol, Bogor,
                  Jawa Barat 16830
                </a>
                <a className="text-sm text-gray-400">Visi Dan Misi</a>
              </div>
            </div>
          </div>
          <div className="w-[1600px] bg-slate-200 mx-auto h-[1px]">

          </div>
          <div className="flex justify-center">
            <p className="text-sm text-gray-400 py-4 md:py-8">
              Copyright &copy; 2024 NamaWeb, All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
