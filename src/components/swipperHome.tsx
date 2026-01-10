"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from './../app/images/unsplash_nbRgZltoOck.png'
import img1 from './../app/images/image 27.png'
import img2 from './../app/images/image 26.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../swipperCss.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
interface SwipperHomeProps {
    onPartnerClick?: () => void;
}

export default function SwipperHome({ onPartnerClick }: SwipperHomeProps) {

    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);

    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 20000)}s`;
        }
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section
                        style={{ backgroundImage: `url('${img.src}')` }}
                        className="h-[60vh] md:h-[80vh] rounded-2xl bg-cover bg-center flex items-center justify-center p-4"
                    >
                        <div className="text-center flex flex-col gap-6 w-full max-w-4xl">
                            <h1 className="text-3xl md:text-7xl font-bold text-white uppercase">«Капитал-Т»</h1>

                            <p className="text-white text-[14px] md:text-2xl px-4">
                                Надежный партнер для успешного роста вашего бизнеса
                            </p>

                            <div className="flex flex-row gap-2 justify-center">
                                <button
                                    onClick={onPartnerClick}
                                    className="bg-[#FFA900] rounded-2xl py-2 px-3 text-sm md:text-base text-white">Стать партнером
                                </button>
                                <button className="border-[#FFA900] border text-[#FFA900] rounded-2xl py-2 px-3 text-sm md:text-base">
                                    Связаться с нами
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-4">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white">9500</h1>
                                    <div className="text-left">
                                        <p className="text-white text-xs md:text-base leading-tight">Общая клиентская база</p>
                                        <p className="text-gray-400 text-xs md:text-sm">включая HoReCa</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white">8250</h1>
                                    <div className="text-left">
                                        <p className="text-white text-xs md:text-base leading-tight">Активная</p>
                                        <p className="text-gray-400 text-xs md:text-sm">клиентская база</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        style={{ backgroundImage: `url('${img1.src}')` }}
                        className="h-[60vh] md:h-[80vh] rounded-2xl bg-cover bg-center flex items-center justify-center p-4"
                    >
                        <div className="text-center flex flex-col gap-6 w-full max-w-4xl">
                            <h1 className="text-3xl md:text-7xl font-bold text-white uppercase">«Капитал-Т»</h1>

                            <p className="text-white text-[14px]  md:text-2xl px-4">
                                Надежность, масштаб, развитие
                            </p>

                            <div className="flex flex-row gap-2 justify-center">
                                <button
                                    onClick={onPartnerClick}
                                    className="bg-[#FFA900] rounded-2xl py-2 px-3 text-sm md:text-base text-white">Стать партнером
                                </button>
                                <button className="border-[#FFA900] border text-[#FFA900] rounded-2xl py-2 px-3 text-sm md:text-base">
                                    Связаться с нами
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-4">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white">9500</h1>
                                    <div className="text-left">
                                        <p className="text-white text-xs md:text-base leading-tight">Общая клиентская база</p>
                                        <p className="text-gray-400 text-xs md:text-sm">включая HoReCa</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white">8250</h1>
                                    <div className="text-left">
                                        <p className="text-white text-xs md:text-base leading-tight">Активная</p>
                                        <p className="text-gray-400 text-xs md:text-sm">клиентская база</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        style={{ backgroundImage: `url('${img2.src}')` }}
                        className="h-[60vh] md:h-[80vh] rounded-2xl bg-cover bg-center flex items-center justify-center p-4"
                    >
                        <div className="text-center flex flex-col gap-6 w-full max-w-4xl">
                            <h1 className="text-3xl md:text-7xl font-bold text-white uppercase">«Капитал-Т»</h1>

                            <p className="text-white text-[14px] md:text-[15px] px-4">
                                Ваш ключ к качественным поставкам
                            </p>

                            <div className="flex flex-row gap-2 justify-center">
                                <button
                                    onClick={onPartnerClick}
                                    className="bg-[#FFA900] rounded-2xl py-2 px-3 text-sm md:text-base text-white">Стать партнером
                                </button>
                                <button className="border-[#FFA900] border text-[#FFA900] rounded-2xl py-2 px-3 text-sm md:text-base">
                                    Связаться с нами
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-4">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white">9500</h1>
                                    <div className="text-left">
                                        <p className="text-white text-xs md:text-base leading-tight">Общая клиентская база</p>
                                        <p className="text-gray-400 text-xs md:text-sm">включая HoReCa</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white">8250</h1>
                                    <div className="text-left">
                                        <p className="text-white text-xs md:text-base leading-tight">Активная</p>
                                        <p className="text-gray-400 text-xs md:text-sm">клиентская база</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
