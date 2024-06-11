import React, { useState } from 'react';
import { Navigasibar } from '../components/Navigasibar';
import { Footer } from '../components/Footer';
import AddressModal from '../components/AddressModal';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const notify = () => toast.success("Pembelian Berhasil!");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState({
    name: '(Belum ada nama)',
    street: '(Belum ada alamat)',
    phone: '(Belum ada nomer telepon)'
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateAddress = (newAddress) => {
    setAddress(newAddress);
    closeModal();
  };

  return (
    <div>
      <Navigasibar />
      <div className="container mx-auto mt-24 px-4 mb-40">
        <h1 className="text-2xl font-semibold mb-6">Pengiriman</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="p-6 rounded-lg outline outline-1">
              <h2 className="text-xl font-semibold mb-4">Alamat Pengiriman</h2>
              <p className="mb-2"><strong>Rumah</strong> • {address.name}</p>
              <p>{address.street}</p>
              <p> {address.phone}</p>
              <button className="text-blue-500 mt-4" onClick={openModal}>Tambahkan Alamat</button>
            </div>
            <div className=" outline outline-1 p-6 rounded-lg mt-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Dell XPS 13 Plus</h2>
                  <p>Intel® Core™ i7-1260P / Intel® Iris Xe Graphics / 16 GB / 1 TB</p>
                </div>
                <p className="text-xl font-semibold">Rp. 19.898.000,00</p>
              </div>
            </div>
          </div>
          <div className='w-full ml-3 md:ml-0'>
            <div className=" outline outline-1 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Rincian Pembelian</h2>
              <div className="flex justify-between mb-2">
                <p>Harga Barang</p>
                <p>Rp. 19.898.000,00</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Biaya Pengiriman</p>
                <p>Rp. 18.000,00</p>
              </div>
              <div className="flex justify-between font-semibold text-xl mb-4">
                <p>Total</p>
                <p>Rp. 19.916.000,00</p>
              </div>
              <button className="bg-black text-white w-full py-2 rounded-lg" onClick={notify}>Bayar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isModalOpen && <AddressModal closeModal={closeModal} updateAddress={updateAddress} />}
    </div>
  );
};

export default Checkout;