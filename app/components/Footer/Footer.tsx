import Link from "next/link";
import Image from "next/image";

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'https://www.instagram.com/epecriativa',
        width: 16
    },
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'https://facebook.com/epecriativa',
        width: 10
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'https://twitter.com/epecriativa',
        width: 16
    },
    {
        imgSrc: '/assets/footer/spotify.svg',
        link: 'https://open.spotify.com/user/3142unitqnxtvsjdwtbb66j3bcmq?si=H3RVchafSnKISN7qUOaAPA',
        width: 16
    },
    {
        imgSrc: '/assets/footer/github.svg',
        link: 'https://github.com/epecriativa',
        width: 16
    },

]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/assets/logo/logo.svg" alt="logo" width={214} height={66} />
                    </div>
                    <h3 className='text-sm font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'>Utilizamos o cenário cultural e histórico do nosso<br />estado, para despertar o nosso senso criativo.</h3>
                    <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                        <Link href={items.link} key={i} target="_blank">
                            <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-epec-yellow">
                                <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                            </div>
                        </Link>
                        ))}

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}
                <div className='col-span-6 justify-center'>
                    <div className="sm:col-span-2">
                        <p className="text-gunmetalgray text-sm font-medium mb-9"><span className='text-epec-red'>Rios Pontes e Overdrives.</span> <strong>Estamos situados no coração do Recife, e Recife está situado no nosso coração.</strong> A bagagem cultural do nosso estado é amplamente reconhecida em todo o Brasil, nos utilizamos dessa carga incrível de arte que nos cerca para mostrar como ser criativo é apenas uma questão de exercício de observação, então estamos no lugar certo.</p>
                    </div>
                    <div className='flex justify-center'>
                        <Image src="/assets/footer/mapa-pernmabuco.svg" alt="nothing" width={350} height={805} />
                    </div>
                </div>

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>© 2024 epec - All rights reserved.</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link className='pointer-events-none' href="" target="_blank">Política de Privacidade</Link></h4>
                    <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link className='pointer-events-none' href="" target="_blank">Termos e Condições</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default footer;
