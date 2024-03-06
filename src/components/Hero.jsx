import derechaLogo from '../assets/Derecha.svg'
import izquierdaLogo from '../assets/Izquierda.svg'
import bgLuz from '../assets/bgLuz.png'
import Navbar from './Navbar'

export default function Hero() {
    return (
        <div className='h-screen w-full'>
            <div className="w-full h-full absolute z-0 opacity-75">
                <img id='lzBg' src={bgLuz} alt="React logo" className='w-full h-full object-fill' />
            </div>
            {/* <div className="absolute opacity-10 bottom-0 z-10 h-1/2 w-full bg-[#202020] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            </div> */}

            <div className="absolute opacity-10 bottom-0 z-10 h-full w-full bg-[#202020] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            </div>

            <Navbar />

            <div className='w-full h-full relative z-20'>
                <section className='absolute  bottom-0'>
                    <img src={izquierdaLogo} alt="Imagen prisma abstracto" />
                </section>
                <section className='absolute right-0  bottom-0'>
                    <img src={derechaLogo} alt="Imagen prisma abstracto" />
                </section>
            </div>

        </div>
    )
}