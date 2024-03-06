import derechaLogo from '../assets/Derecha.svg'
import izquierdaLogo from '../assets/Izquierda.svg'
import logoGithub from '../assets/GithubLogo.svg'
import linkedinLogo from '../assets/LinkedinLogo.svg'
import correo from '../assets/Correo.svg'
import bgLuz from '../assets/bgLuz.png'
import Pill from '../components/Pill.jsx'
import Navbar from './Navbar'

export default function Hero() {
    return (
        <div className='h-screen w-full'>
            <div className="w-full h-full absolute z-0 opacity-75">
                <img src={bgLuz} alt="background ligth" className='w-full h-full object-fill' />
            </div>

            <div className="absolute opacity-10 bottom-0 z-10 h-full w-full bg-[#202020] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            </div>

            <Navbar />

            <section className='absolute bottom-1/3 z-50 w-5/12 right-0 left-0 m-auto h-1/2 flex flex-col justify-center items-center gap-4 '>
                <div className='flex justify-center items-center gap-5'>
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-square w-24 h-[80%] rounded-lg object-cover"
                    />

                    <div className=''>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">Hey, soy Antonio </h1>

                        <p className="text-[#F5F5F5] text-xl mt-4">
                            <strong className='text-[#71c4ef]'>Ingeniero en Sistemas Computacionales </strong>, me encanta la programación. Especializado en el desarrollo de aplicaciones web únicas, constantemente aprendiendo y mejorando mis habilidades.
                        </p>
                    </div>
                </div>
                <div className='z-60 flex gap-5 mt-4'>
                    <Pill text="Github" icon={logoGithub} link="https://github.com/jose1500s" mail="" />
                    <Pill text="Linkedin" icon={linkedinLogo} link="https://www.linkedin.com/in/jos%C3%A9-antonio-pati%C3%B1o-palomares-896b3b2a0/" mail="" />
                    <Pill text="Correo" icon={correo} link="" mail="joseantonio15826@gmail.com" />
                </div>
            </section>

            <section className='absolute  bottom-0 '>
                <img src={izquierdaLogo} alt="Imagen prisma abstracto" />
            </section>
            <section className='absolute right-0  bottom-0 '>
                <img src={derechaLogo} alt="Imagen prisma abstracto" />
            </section>


        </div >
    )
}