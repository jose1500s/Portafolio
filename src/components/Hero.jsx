import derechaLogo from '../assets/Derecha.svg'
import izquierdaLogo from '../assets/Izquierda.svg'
export default function Hero() {
    return (
        <div className='h-screen w-full'>
            <div id="uashduas" className="absolute opacity-15 bottom-0 -z-10 h-1/2 w-full bg-[#202020] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            </div>

            <div id='contenedorImgD' className=' w-full h-full relative '>
                <section id='imagenL' className='absolute  bottom-0'>
                    <img  src={izquierdaLogo} className="" alt="React logo" />
                </section>
                <section id='imagenD' className='absolute right-0  bottom-0'>
                    <img  src={derechaLogo} className="" alt="React logo" />
                </section>
            </div>

        </div>
    )
}