import logoGithub from '../assets/GithubLogo.svg'
import linkedinLogo from '../assets/LinkedinLogo.svg'
import cvLogo from '../assets/CVLogo.svg'
import bgLuz from '../assets/bgLuz.png'
import Pill from '../components/Pill.jsx'
import LogosSlider from './LogoSlider.jsx'
import {
    Laravel,
    ReactLogo,
    Js,
    Docker,
    Github,
    MySQL,
    Tailwind,
    Node
} from './Logos.jsx'

export default function Hero() {

    const logos = [ReactLogo, Laravel, Js, Node, Docker, Github, MySQL, Tailwind]

    return (
        <header className='w-full'>
            <div className="w-full h-full absolute z-[-1] opacity-45">
                <img src={bgLuz} alt="background ligth" className='w-full h-full object-fill' />
            </div>

            <nav className="z-10 max-[740px]:w-[90%]  max-[740px]:text-sm absolute w-[40%] h-10 right-0 left-0 mt-5  ml-auto mr-auto text-[#F5F5F5] text-lg
         bg-[#1D1F20] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-[58%] border border-white border-opacity-25" id="nav">
                <div className="w-full h-full flex justify-center items-center gap-7 max-[740px]:gap-4">
                    <a className="hover:cursor-pointer hover:text-[#71c4ef]" href="">Sobre mí</a>
                    <a className="hover:cursor-pointer hover:text-[#71c4ef]" href="">Experiencia</a>
                    <a className="hover:cursor-pointer hover:text-[#71c4ef]" href="">Proyectos</a>
                    <a className="hover:cursor-pointer hover:text-[#71c4ef]" href="">Contacto</a>
                </div>
            </nav>


            <section id='about' className='px-4 w-full min-h-screen relative  flex flex-col justify-center items-center gap-4 
            max-[740px]:w-full
            '>

                <div className='animate-slide-out-top flex justify-center items-center gap-5 
                max-[740px]:gap-3 max-[740px]:flex-col  max-[740px]:relative
                '>
                    <div className='max-[740px]:absolute right-[9%] top-[-2.25rem]'>
                        <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Antonio Patiño foto de perfil"
                            className="aspect-square w-24 h-[80%] rounded-lg object-cover
                        max-[740px]:w-20 max-[740px]:h-[50%] 
                        "
                        />
                    </div>

                    <div className='w-5/12 max-[740px]:w-full '>
                        <h1 className="text-4xl max-[740px]:text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">Hey, soy Antonio </h1>

                        <p className="text-[#F5F5F5] text-xl max-[740px]:text-base mt-4">
                            <strong className='text-[#71c4ef]'>Ingeniero en Sistemas Computacionales </strong>, me encanta la programación. Especializado en el desarrollo de aplicaciones web únicas, constantemente aprendiendo y mejorando mis habilidades.
                        </p>
                    </div>
                </div>

                <div className='animate-blurred-fade-in animate-delay-400 flex items-center justify-center flex-wrap gap-5 mt-4'>
                    <Pill text="Github" icon={logoGithub} link="https://github.com/jose1500s" mail="" />
                    <Pill text="Linkedin" icon={linkedinLogo} link="https://www.linkedin.com/in/jos%C3%A9-antonio-pati%C3%B1o-palomares-896b3b2a0/" mail="" />
                    <a href='cv.pdf' download="José Antonio Patiño CV" className='font-extrabold'>
                        <button className="button">
                            <img src={cvLogo} alt="icon" width="24" height="24" />
                            <span className="text">Descargar</span>
                        </button>
                    </a>

                </div>

                <LogosSlider logos={logos} />

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