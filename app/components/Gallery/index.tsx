"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


const Gallery = () => {
    return (
        <div id="gallery">
            <div className='mx-auto max-w-2xl lg:max-w-7xl py-20 lg:px-8 mt-20'>
                <div>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-midnightblue text-4xl sm:text-5xl font-semibold mb-5 sm:mb-0">Nossos encontros</h3>
                    </Fade>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6'>

                    <div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
                        <Image src="/assets/gallery/hackathon-inovacriativa.png" alt="pizza-one" width={1000} height={805} className="inner-img"/>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <Image src="/assets/gallery/insight-caruaru.png" alt="pizza-two" width={700} height={405} className="inner-img"/>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/assets/gallery/insight-caruaru-neto-joseph.png" alt="pizza-three" width={500} height={405} className="inner-img"/>
                                </div>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/assets/gallery/sebrae-epec.png" alt="pizza-four" width={500} height={405} className="inner-img"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery;
