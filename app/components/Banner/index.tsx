"use client"
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div id="home" className='bg-white overflow-hidden relative'>
            <div className="mx-auto max-w-7xl pt-20 pb-24 px-6 relative z-10">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    {/* Left Column */}
                    <div className='flex flex-col justify-center'>
                        <div className='flex gap-2 mb-4'>
                            <Image src="/selo verify.svg" alt="check-image" width={24} height={24} />
                            <h3 className='text-epec-blue text-lg font-medium'>Bem-vindo a</h3>
                        </div>
                        
                        <h1 className='text-[#2D2F30] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight'>
                            Escola Pernambucana<br />de Economia Criativa
                        </h1>
                        
                        <h3 className='text-[#2D2F30] text-lg sm:text-xl font-medium mb-12 max-w-lg leading-snug'>
                            Nossa missão <span className='text-epec-blue'>é educar as futuras gerações de profissionais criativos</span> e jovens empreendedores.
                        </h3>

                        <div className='mt-8'>
                            <p className='text-[#57595F] text-sm font-medium mb-2'>
                                Somos uma empresa<br />embarcada no:
                            </p>
                            <a 
                                href="https://embarcadas.portodigital.org/embarcadas/2809" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block transition-all duration-300 hover:scale-105 hover:opacity-80 drop-shadow-sm hover:drop-shadow-md"
                            >
                                <Image 
                                    src="/logo.5417d9c.svg" 
                                    alt="Porto Digital Logo" 
                                    width={150} 
                                    height={50} 
                                    className="object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Globe & Animation */}
                    <div className='flex justify-center items-center relative min-h-[500px]'>
                        
                        {/* Globe Image */}
                        <div className="relative z-10 w-full max-w-md">
                            <Image 
                                src="/earth epec sun.svg" 
                                alt="Criatividade Muda o Mundo - epec" 
                                width={500} 
                                height={500} 
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
