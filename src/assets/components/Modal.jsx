import React from 'react'
import { Adv } from './Adv'
import { Adv2 } from './Adv2'

const Modal = () => {
  return (
    <div>
                <div className="flex md:px-80 w-full py-12 flex-col md:flex-row gap-6 md:gap-0 px-2">
          <button
            className="md:w-2/3 w-full h-full text-start btn btn-ghost"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <Adv2
              id={1}
              title={
                "Lenovo Hadirkan Laptop Untuk Kelas Bisnis Terbaru Yaitu ThinkPad L dan X13"
              }
              image={"/img/adv1.png"}
              date={"14/02/24"}
              width={"md:w-[800px] w-[410px]"}
              height={"md:h-[560px] h-80"}
            />
          </button>
        </div>
    </div>
  )
}

export default Modal