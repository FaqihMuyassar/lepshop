export const Footer = () => {
  return (
    <>
      <div className="w-full outline outline-1 outline-gray-200 dark:bg-gery">
        <div className="mx-auto w-full">
          <div className="md:flex md:flex-row grid grid-cols-2 gap-6 px-12 md:justify-center md:px-72 py-8">
            <div id="Komunitas" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500 dark:text-white">KOMUNITAS</h3>
              <div className="flex flex-col gap-2 pt-2">
                <Link className="text-sm text-gray-400 dark:text-white">Youtube</Link>
                <Link className="text-sm text-gray-400 dark:text-white" href={"www.instagram.com/ahfary_"} >Instagram</Link>
                <Link className="text-sm text-gray-400 dark:text-white">Facebook</Link>
                <Link className="text-sm text-gray-400 dark:text-white">Team Gaming</Link>
                <Link className="text-sm text-gray-400 dark:text-white">Blog</Link>
              </div>
            </div>
            <div id="Dukungan" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500 dark:text-white">DUKUNGAN</h3>
              <div className="flex flex-col gap-2 pt-2">
                <a className="text-sm text-gray-400 dark:text-white">Customer Service Online</a>
                <a className="text-sm text-gray-400 dark:text-white">Lokasi Service</a>
                <a className="text-sm text-gray-400 dark:text-white">Garansi</a>
                <a className="text-sm text-gray-400 dark:text-white">Layanan Jarak Jauh</a>
              </div>
            </div>
            <div id="Berita" className="md:w-1/5 w-full">
              <h3 className="text-lg font-bold text-gray-500 dark:text-white">BERITA</h3>
              <div className="flex flex-col gap-2 pt-2">
                <a className="text-sm text-gray-400 dark:text-white">Whats New</a>
                <a className="text-sm text-gray-400 dark:text-white">Awards</a>
              </div>
            </div>
            <div id="TentangKami" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500 dark:text-white">TENTANG KAMI</h3>
              <div className="flex flex-col gap-2 pt-2">
                <a className="text-sm text-gray-400 dark:text-white">Tentang MSI</a>
                <a className="text-sm text-gray-400 dark:text-white">Visi Dan Misi</a>
              </div>
            </div>
            <div id="Address" className="md:w-1/5 w-full">
              <h3 className="text-xl font-bold text-gray-500 dark:text-white">ALAMAT</h3>
              <div className="flex flex-col gap-2 pt-2 w-56">
                <a className="text-sm text-gray-400 dark:text-white">
                  Kp.Kebon Kelapa, RT.02/RW.11, Singasari, Kec.Jonggol, Bogor,
                  Jawa Barat 16830
                </a>
              </div>
            </div>
          </div>
          <div className="w-[1600px] bg-slate-200 mx-auto h-[1px]">

          </div>
          <div className="flex justify-center">
            <p className="text-sm text-gray-400 py-4 md:py-8 dark:text-white">
              Copyright &copy; 2024 NamaWeb, All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
