import Image from "next/image"
import useTemple from "Hooks/useTemple"
import { formatearDin } from "helpers"

const ModalProd = () => {
    const {producto, handleModal} = useTemple()
    const {nombre, precio, imagen} = producto;

    return (
    <div className='md:flex gap-10'>
        <div className='md:w-1/3'>
            <Image 
                width={300}
                height={400}
                alt={`Imagen del producto ${nombre}`}
                src={`/img/${imagen}.jpg`}
            />
        </div>
        <div className='md:w-2/3'>
            <div className="flex justify-end">
                <button 
                    onClick={() => handleModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{nombre}</h1>
            <p className="mt-5 font-medium text-4xl text-amber-500">{formatearDin(precio)}</p>
        </div>
    </div>
  )
}

export default ModalProd