import Project from "./Project"
export default function Projects() {

    const projects = [
        {
            title: 'Adm. Gastos',
            subtitle: 'Administra tus gastos',
            src: 'cgapp.png',
            alt: 'Imagen de pagina web administradora de gastos',
            text: 'Aplicación web para administrar gastos, permite agregar, editar y eliminar gastos, además de mostrar un resumen de los mismos, usando React y TailwindCSS, renderizado condicional y manejo de estados con hooks',
            href: 'https://cgapp.netlify.app/',
            id: 1
        },
        {
            title: 'W. World',
            subtitle: 'Where in the world?',
            src: 'wworld.png',
            alt: 'Imagen de pagina web de geografia',
            text: 'Aplicación web para aprender geografía, consume una API de países, permite el filtrado por región y búsqueda por nombre, usando React y TailwindCSS ademas de react router dom para la navegación entre componentes',
            href: 'https://countriessearchapp.netlify.app',
            id: 2
        },
        {
            title: 'Crypto Tracker',
            subtitle: 'Rastreador de criptomonedas',
            src: 'crypto.png',
            alt: 'Imagen de pagina web de criptomonedas',
            text: 'Aplicación web para rastrear criptomonedas, consume una API de criptomonedas, permite ver el precio de las criptomonedas en tiempo real, usando React y TailwindCSS, además de react hooks para el manejo de estados',
            href: 'https://japp-crypto.netlify.app',
            id: 3
        },
    ]

    return (
        <>
            <div className="w-5/12 max-[740px]:w-3/4 mx-auto text-center mt-14">
                <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#74ace0] via-[#62abf0] to-[#5a8ebe] bg-[200%_auto] bg-clip-text text-3xl text-transparent uppercase font-semibold'>
                Proyectos recientes... 
                </span>
            </div>
            <section className="container-grid w-5/12 max-[740px]:w-3/4 h-[550px] mx-auto mt-14 mb-10">
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