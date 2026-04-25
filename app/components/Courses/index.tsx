"use client"
import Slider from "react-slick";
import React, { Component, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// Custom Arrow Components
function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div 
            className="absolute right-0 top-[42%] -translate-y-1/2 z-10 cursor-pointer bg-white/90 rounded-full p-2 shadow-md sm:hidden border border-gray-100"
            onClick={onClick}
        >
            <ChevronRightIcon className="h-6 w-6 text-black" />
        </div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div 
            className="absolute left-0 top-[42%] -translate-y-1/2 z-10 cursor-pointer bg-white/90 rounded-full p-2 shadow-md sm:hidden border border-gray-100"
            onClick={onClick}
        >
            <ChevronLeftIcon className="h-6 w-6 text-black" />
        </div>
    );
}

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    ementaSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'O Profissional do Futuro',
        heading2: '',
        name: "40 horas",
        description: "As principais habilidades e ferramentas essenciais para empreendedores e profissionais nos próximos anos.",
        imgSrc: './assets/courses/profissional-do-futuro.png',
        price: 0,
        rating: 5.0,
        ementaSrc: '/Ementa O Profissional do Futuro.pdf',
    },
    {
        heading: 'Redes',
        heading2: 'Sociais',
        name: "8 horas",
        description: "Domine as estratégias de engajamento e crescimento nas principais plataformas digitais da atualidade.",
        imgSrc: './assets/courses/redes-sociais.png',
        price: 0,
        rating: 5,
        ementaSrc: '/Ementa Redes Sociais.pdf',
    },
    {
        heading: 'Meta Ads Analytics',
        heading2: 'Essencial',
        name: "8 horas",
        description: "Aprenda a analisar dados e otimizar suas campanhas de tráfego pago no ecossistema da Meta.",
        imgSrc: './assets/courses/meta-ads.png',
        price: 0,
        rating: 5,
        ementaSrc: '/Meta ads Analytics Essencial.pdf',
    },
]


export default class MultipleItems extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            currentPdf: ''
        };
    }

    setIsOpen = (value: boolean, pdf: string = '') => {
        this.setState({ isOpen: value, currentPdf: pdf });
    }

    render() {
        const { isOpen, currentPdf } = this.state as any;
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true 
                    }
                }
            ]
        };


        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl sm:text-5xl font-semibold mb-5 sm:mb-0">Cursos</h3>
                        <Link href={''} className="text-epec-blue text-lg font-medium space-links pointer-events-none">Conheça...&nbsp;&gt;&nbsp;</Link>
                    </div>

                    <div className="relative">
                        <Slider {...settings}>
                            {postData.map((items, i) => (
                                <div key={i}>

                                    <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl h-[640px] flex flex-col justify-start'>
                                        <div className="relative rounded-3xl overflow-hidden h-[220px] shrink-0">
                                            <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto bg-white object-cover w-full h-full" />
                                        </div>

                                        <div className="px-3 flex-1 flex flex-col">
                                            <div className='flex flex-col justify-start pt-14 pb-1'>
                                                <h3 className='text-base font-normal opacity-75'>{items.name}</h3>
                                                <h4 className='text-xl font-bold pt-1 text-[#222c44] leading-tight'>
                                                    {items.heading} {items.heading2}
                                                </h4>
                                                <p className='text-sm font-normal pt-2 opacity-75 line-clamp-3'>
                                                    {items.description}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center py-6">
                                                    <div className="flex items-center">
                                                        <Image src="/Metodologia Exclusiva.svg" alt="Metodologia Exclusiva" width={140} height={36} className="object-contain" />
                                                    </div>
                                                    <a 
                                                        href={`https://wa.me/5581991337935?text=Olá, gostaria de aplicar para o curso: ${items.heading} ${items.heading2}...`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-[#b5f78b] text-[#204906] px-6 py-2 rounded-full font-bold text-lg hover:opacity-90 transition-opacity tracking-wider"
                                                    >
                                                        Aplicar
                                                    </a>
                                                </div>

                                                <hr style={{ color: "#C4C4C4" }} />

                                                <div className="flex justify-between pt-6">
                                                    <div 
                                                        className="flex gap-2 cursor-pointer hover:opacity-75 transition-opacity"
                                                        onClick={() => this.setIsOpen(true, items.ementaSrc)}
                                                    >
                                                        <Image src={'./assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                        <h3 className="text-base font-medium text-black opacity-75">Acesse a Ementa</h3>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <Image src={'./assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                        <h3 className="text-base font-medium text-black opacity-75">Conheça</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/* PDF Modal */}
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-[100]" onClose={() => this.setIsOpen(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl w-[95vw] h-[85vh] sm:h-[90vh] flex flex-col">
                                        <div className="bg-white px-4 py-3 sm:px-6 flex justify-between items-center border-b">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Ementa do Curso
                                            </Dialog.Title>
                                            <div className="flex items-center gap-4">
                                                {currentPdf && (
                                                    <a 
                                                        href={currentPdf} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="hidden sm:block text-sm text-epec-blue hover:underline"
                                                    >
                                                        Abrir em nova aba
                                                    </a>
                                                )}
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                                                    onClick={() => this.setIsOpen(false)}
                                                >
                                                    <span className="sr-only">Fechar</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-gray-100 relative overflow-hidden">
                                            {currentPdf ? (
                                                <div className="w-full h-full flex flex-col">
                                                    {/* Botão de destaque para Mobile */}
                                                    <div className="sm:hidden bg-blue-50 p-4 border-b border-blue-100 flex justify-center">
                                                        <a 
                                                            href={currentPdf} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="bg-epec-blue text-white px-6 py-2 rounded-full font-bold text-sm shadow-md"
                                                        >
                                                            Ver Ementa Completa (PDF)
                                                        </a>
                                                    </div>
                                                    <iframe
                                                        src={`${currentPdf}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                                                        className="w-full h-full border-none flex-1"
                                                        title="PDF Viewer"
                                                        style={{ WebkitOverflowScrolling: 'touch' }}
                                                    ></iframe>
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center h-full">
                                                    <p className="text-gray-500">Ementa não disponível para este curso.</p>
                                                </div>
                                            )}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>

        );
    }
}
