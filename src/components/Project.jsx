import linkIcon from '../assets/linkIcon.svg'
import githubIcon from '../assets/GithubLogo.svg'

export default function Project({ projects }) {

    const { alt, title, text, src, href, repoLink, tecnologias } = projects
  
    return (
        <div className=" bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
         w-full mx-auto rounded-md flex flex-col items-center p-2 md:max-h-96">
            <div className='relative w-full h-[50%]'>
                <img src={src} alt={alt}
                    className='w-full h-full object-cover rounded-md opacity-60'
                />
                <div className="tecnologias flex items-center p-1 gap-4 absolute top-0">
                    {tecnologias.map((tecnologia, index) => (
                        <img src={tecnologia}
                            alt='tecnologia'
                            key={index}
                            className='w-9 h-9 rounded-full bg-zinc-100 p-1'
                        />
                    ))
                    }
                </div>
            </div>
            <div className=' text-white mt-2'>
                <h3 className='text-3xl'>
                    {title}
                </h3>
                <p className='text mt-2 leading-6'>{text}</p>
                <div className='flex item-center justify-center gap-5 mt-2'>
                    <a href={href} target='_blank' rel='noreferrer' className='hover:opacity-70'>
                        <img src={linkIcon}
                            alt='link'
                            className='w-8 h-8'
                        />
                    </a>
                    <a href={repoLink} target='_blank' rel='noreferrer' className='hover:opacity-70'>
                        <img src={githubIcon}
                            alt='link'
                            className='w-8 h-8'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}