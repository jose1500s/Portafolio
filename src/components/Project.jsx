export default function Project({ projects }) {

    const { alt, title, subtitle, text, src, href } = projects

    return (
        <div className="rounded-md">
            <a href={href} target="_blank" className="group relative block bg-transparent h-full">
                <img
                    alt={alt}
                    src={`/src/assets/${src}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-50"
                />

                <div className="relative h-full p-2 sm:p-6 lg:p-4">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <p className="text-xl font-extrabold text-white sm:text-2xl">{subtitle}</p>
                        </div>

                        <div>
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-base text-white text">
                                    {text}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </a>
        </div>
    )
}