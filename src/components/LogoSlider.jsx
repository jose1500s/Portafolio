export default function LogoSlider({ logos }) {
    return (
        <>
            <div className="logo-slider w-1/2 max-[740px]:w-[90%] animate-blurred-fade-in animate-delay-400">
                <div className="logo-slide-track">
                    {logos.map((logo, i) => (
                        <div key={i} className="slide">
                            {logo()}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}