"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div id="home" className='bg-lightkblue'>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="dMVNsFUs5Ys" onClose={() => setOpen(false)} />
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-epec-blue text-sm font-semibold text-center lg:text-start'>Bem-vindo a</h3>
                        </div>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Escola Pernambucana de Economia Criativa</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Acreditamos que a <span className='text-epec-blue'>Economia Criativa</span> é o motor para o futuro do desenvolvimento social, político e econômico do mundo.</h3>

                        <div className="relative text-white focus-within:text-white flex flex-row-reverse justify-center lg:justify-end rounded-full pt-5 lg:pt-0">
                            <p className="py-6 lg:py-8 text-lg text-black opacity-75 rounded-full focus:outline-none focus:text-black">Aperte o Play!</p>
                            <div className="inset-y-0 left-0 flex items-center pr-2 lg:pt-0">
                                <button onClick={() => setOpen(true)} className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-epec-blue hover:scale-110 duration-150 ease-in-out rounded-full">
                                    <Image src={'/assets/banner/play.svg'} alt="inputicon" width={30} height={30} />
                                </button>
                            </div>
                        </div>
                        <div className='grid gap-y-2 overflow-scroll'>
                            <div className='flex items-center pt-10 lg:pt-4'>
                                <div className='flex flex-1 bg-epec-blue p-2 rounded-l-lg justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white'>CRIATIVIDADE</p>
                                </div>
                                <div className='flex flex-1  bg-epec-red p-2 justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white'>INOVAÇÃO</p>
                                </div>
                                <div className='flex flex-1 bg-epec-orange p-2 justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white'>CULTURA</p>
                                </div>
                                <div className='flex flex-1 bg-epec-yellow p-2 justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white'>EMPREENDEDORISMO</p>
                                </div>
                                <div className='flex flex-1 bg-epec-blue p-2 rounded-r-lg justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white'>DESIGN</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-1 bg-epec-red p-2 rounded-l-lg justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white '>MÚSICA</p>
                                </div>
                                <div className='flex flex-1 bg-epec-orange p-2 justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white '>ARTES</p>
                                </div>
                                <div className='flex flex-1 bg-epec-yellow p-2 justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white '>SUSTENTABILIDADE</p>
                                </div>
                                <div className='flex flex-1 bg-epec-blue p-2 justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white '>COLABORAÇÃO</p>
                                </div>
                                <div className='flex flex-1 bg-epec-red p-2 rounded-r-lg justify-center'>
                                    <p className='text-sm md:text-base font-normal text-white '>REPRESENTATIVIDADE</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/rayssa.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
