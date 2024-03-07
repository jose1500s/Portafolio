import derechaLogo from '../assets/Derecha.svg'
import izquierdaLogo from '../assets/Izquierda.svg'
import logoGithub from '../assets/GithubLogo.svg'
import linkedinLogo from '../assets/LinkedinLogo.svg'
import correo from '../assets/Correo.svg'
import bgLuz from '../assets/bgLuz.png'
import Pill from '../components/Pill.jsx'

export default function Hero() {
    return (
        <header className=' w-full'>
            <div className="w-full h-full absolute z-[-1] opacity-30">
                <img src={bgLuz} alt="background ligth" className='w-full h-full object-fill' />
            </div>

            <nav className="max-[640px]:w-[90%] max-[640px]:text-sm absolute w-1/2 h-10 right-0 left-0 mt-5  ml-auto mr-auto text-[#F5F5F5] text-md
         bg-[#1D1F20] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-[58%] border border-white border-opacity-25" id="nav">
                <div className="w-full h-full flex justify-center items-center gap-7">
                    <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Sobre mí</a>
                    <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Experiencia</a>
                    <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Proyectos</a>
                    <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Contacto</a>
                </div>
            </nav>


            <section id='about' className='w-full min-h-screen relative  flex flex-col justify-center items-center gap-4 
            max-[640px]:w-full
            '>
                <div className='flex justify-center items-center gap-5 max-[640px]:gap-'>
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-square w-24 h-[80%] rounded-lg object-cover
                        max-[640px]:w-20 max-[640px]:h-[50%]
                        "
                    />

                    <div className='w-5/12 max-[640px]:w-full'>
                        <h1 className="text-4xl max-[640px]:text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">Hey, soy Antonio </h1>

                        <p className="text-[#F5F5F5] text-xl max-[640px]:text-base mt-4">
                            <strong className='text-[#71c4ef]'>Ingeniero en Sistemas Computacionales </strong>, me encanta la programación. Especializado en el desarrollo de aplicaciones web únicas, constantemente aprendiendo y mejorando mis habilidades.
                        </p>
                    </div>
                </div>
                <div className='flex gap-5 mt-4'>
                    <Pill text="Github" icon={logoGithub} link="https://github.com/jose1500s" mail="" />
                    <Pill text="Linkedin" icon={linkedinLogo} link="https://www.linkedin.com/in/jos%C3%A9-antonio-pati%C3%B1o-palomares-896b3b2a0/" mail="" />
                    <Pill text="Correo" icon={correo} link="" mail="joseantonio15826@gmail.com" />
                </div>
                {/* pensar otra cosa para poner, mucho pedo las imagenes y al final ni quedan bien */}
                {/* <img className='absolute left-0 bottom-0 w-1/2 max-h-full' src={izquierdaLogo} alt="Imagen prisma abstracto" />
                <img className='absolute right-0 bottom-0 w-1/2 max-h-full' src={derechaLogo} alt="Imagen prisma abstracto" /> */}

                <div className="scrolldown">
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </section>


        </header>
    )
}