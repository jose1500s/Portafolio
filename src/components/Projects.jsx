import Project from "./Project"
import cgapp from '../assets/cgapp.png'
import crytpo from '../assets/crypto.png'
import wworld from '../assets/wworld.png'
import ReactLogo from '../assets/logosTecnologias/React.svg'
import TailwindLogo from '../assets/logosTecnologias/TailwindCss.svg'
import reactRouter from '../assets/logosTecnologias/reactRouter.svg'
export default function Projects() {

    const projects = [
        {
            title: 'Administra tus gastos',
            src: cgapp,
            alt: 'Imagen de pagina web administradora de gastos',
            text: 'Permite agregar, editar y eliminar gastos, además de mostrar un resumen de los mismos, usando React y TailwindCSS, renderizado condicional y manejo de estados con hooks',
            href: 'https://cgapp.netlify.app/',
            repoLink: 'https://github.com/jose1500s/gestion-gastos',
            tecnologias: [ReactLogo, TailwindLogo],
            id: 1
        },
        {
            title: 'Cotiza criptomonedas',
            src: crytpo,
            alt: 'Imagen de pagina web para cotizar criptomonedas',
            text: 'Permite cotizar criptomonedas en tiempo real, usando una API, React y TailwindCSS, manejo de estados con hooks',
            href: 'https://japp-crypto.netlify.app/',
            repoLink: 'https://github.com/jose1500s/crypto-search',
            tecnologias: [ReactLogo, TailwindLogo],
            id: 2
        },
        {
            title: 'Buscador de países',
            src: wworld,
            alt: 'Imagen de pagina web buscadora de paises',
            text: 'Permite buscar paises y ver su información, usando una API, React y TailwindCSS, manejo de estados con hooks y rutas con react-router-dom',
            href: 'https://countriessearchapp.netlify.app/',
            repoLink: 'https://github.com/jose1500s/challenge-countries-search',
            tecnologias: [ReactLogo, TailwindLogo, reactRouter],
            id: 3
        },
    ]

    return (
        <>
            <div className="w-5/12 max-[740px]:w-3/4  mx-auto text-center mt-14 flex gap-3 items-center justify-center" id="proyectos">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.9em" height="2.9em" viewBox="0 0 24 24"><path fill="#fff" d="m19.17 12l-4.58-4.59L16 6l6 6l-3.59 3.59L17 14.17zM1.39 4.22l4.19 4.19L2 12l6 6l1.41-1.41L4.83 12L7 9.83l12.78 12.78l1.41-1.41L2.81 2.81z"></path></svg>
                <h2 className="text-white text-4xl">Proyectos</h2>
            </div>
            <section id='projectsContainer' className="w-3/4 max-[740px]:w-3/4  max-[740px]:h-auto  mx-auto mt-14 mb-10">
                {projects.map((project => (
                    <Project
                        key={project.id}
                        projects={project}
                    />
                )))}
            </section>
        </>
    )
}