"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
    const images = [
        { src: "/assets/gallery/hackathon-inovacriativa.png", className: "md:col-span-2 md:row-span-2" },
        { src: "/assets/gallery/DSC09313.JPG", className: "md:col-span-1 md:row-span-1", objectPosition: "20% 50%" },
        { src: "/assets/gallery/insight-caruaru.png", className: "md:col-span-1 md:row-span-1" },
        { src: "/assets/gallery/DSC09380.JPG", className: "md:col-span-2 md:row-span-1" },
        { src: "/assets/gallery/DSC09446.JPG", className: "md:col-span-1 md:row-span-1", objectPosition: "15% 50%" },
        { src: "/assets/gallery/insight-caruaru-neto-joseph.png", className: "md:col-span-1 md:row-span-1", objectPosition: "top" },
        { src: "/assets/gallery/sebrae-epec.png", className: "md:col-span-1 md:row-span-1" },
        { src: "/assets/gallery/DSC09497.JPG", className: "md:col-span-1 md:row-span-1" },
    ];

    return (
        <div id="eventos" className="py-20">
            <div className='mx-auto max-w-2xl lg:max-w-7xl px-4 lg:px-8 mt-20'>
                <div className="mb-12">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-midnightblue text-4xl sm:text-5xl font-semibold">Nossos encontros</h3>
                        <p className="text-slategray text-lg mt-4 opacity-75">Momentos marcantes da nossa jornada criativa.</p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {images.map((img, i) => (
                        <div key={i} className={`relative overflow-hidden rounded-3xl group shadow-lg ${img.className}`}>
                            <Image 
                                src={img.src} 
                                alt={`Eventos EPEC ${i}`} 
                                fill
                                style={{ objectPosition: img.objectPosition || 'center' }}
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                                <span className="text-white text-sm font-medium tracking-wider uppercase">Ver Momento</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
