export default function Navbar() {
    return (
        <nav className="absolute max-[640px]:w-[90%] max-[640px]:text-sm  w-1/2 h-10 z-40 left-0 right-0 mt-3 ml-auto mr-auto text-[#F5F5F5] text-md
         bg-[#1D1F20] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-[58%] border border-white border-opacity-25" id="nav">
            <div className="w-full h-full flex justify-center items-center gap-7">
                <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Sobre mí</a>
                <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Experiencia</a>
                <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Proyectos</a>
                <a className="hover:cursor-pointer hover:text-[#dbd8d8]" href="">Contacto</a>
            </div>
        </nav>
    )
}