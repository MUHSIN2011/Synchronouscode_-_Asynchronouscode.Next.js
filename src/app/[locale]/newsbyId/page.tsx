"use client"

import React, { useEffect } from 'react'
import Img from './../../images/image 19 (1).png'
import Img3 from './../../images/image 19.png'
import Img1 from './../../images/image (21).png'
import Img2 from './../../images/image (22).png'
import Image from 'next/image';
import Cards from '@/src/components/Cards';
import AOS from "aos"

function page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (
        <main className='max-w-337.5 m-auto mt-3 xl:px-0 px-3'>
            <section data-aos="fade-up">
                <Image className='w-full rounded-2xl' src={Img} alt="" data-aos="zoom-in" />
                <h1 className='text-4xl text-center my-3 font-bold' data-aos="fade-down" data-aos-delay="200">Ведущая торгово-дистрибьюторская компания</h1>
                <p className='text-[#9CA3AF] text-center font-semibold' data-aos="fade-up" data-aos-delay="300">01.01. 2023 г.</p>
                <div className='flex flex-col gap-4' data-aos="fade-up" data-aos-delay="400">
                    <h1 className='text-2xl font-bold' data-aos="fade-right" data-aos-delay="400">О компании</h1>
                    <p data-aos="fade-up" data-aos-delay="500">«КАПИТАЛ-Т» - Одна из крупнейших дистрибьюторских компаний на территории Республики Таджикистан, занимающаяся оптовой торговлей и дистрибуцией продуктов питания, парфюмерии и косметики, средств гигиены и др.</p>
                    <p className='font-bold' data-aos="fade-up" data-aos-delay="600">С 2000 года компания ООО «КАПИТАЛ-Т» начала динамично развиваться, налаживаются новые партнерские взаимоотношения, растет число клиентов, улучшается материально- техническая база компании, совершенствуется программное обеспечение.</p>
                    <p data-aos="fade-up" data-aos-delay="700">В Компании регулярно проводится большая работа по расширению географии продаж, с целью покрытия отдаленных и труднодоступных районов республики. Меняется организационная структура, активно развивается оптовое и розничное направление продаж, происходит оптимизация работы в структуре отделов продаж и логистики. Улучшается качество дистрибьюции, что подтверждается лидирующими позициями на рынке.</p>
                </div>
                <div className='flex flex-col gap-4' data-aos="fade-up" data-aos-delay="800">
                    <h1 className='text-2xl font-bold' data-aos="fade-right" data-aos-delay="800">Ценности</h1>
                    <p className='font-bold' data-aos="fade-up" data-aos-delay="900">Стремление к качественному обслуживанию, укрепление доверия клиентов и постоянное развитие. Мы гордимся своей репутацией лидера и надёжного партнёра, который способствует доступности лучших товаров для бизнеса и населения Таджикистана.</p>
                </div>

                <div className='flex flex-col gap-4 my-3' data-aos="fade-up" data-aos-delay="1000">
                    <h1 className='text-2xl font-bold' data-aos="fade-right" data-aos-delay="1000">Цели</h1>
                    <ul className='list-decimal font-bold pl-5'>
                        <li data-aos="fade-up-right" data-aos-delay="1100">Открытие РЦБ в ГБАО</li>
                        <li data-aos="fade-up-right" data-aos-delay="1200">Расширение портфеля</li>
                        <li data-aos="fade-up-right" data-aos-delay="1300">Улучшить сервис обслуживания</li>
                    </ul>
                    <p data-aos="fade-up" data-aos-delay="1400">На сегодняшний день компания «Капитал-Т» – современная, динамично развивающаяся компания с большим потенциалом и перспективами.</p>
                </div>
            </section>
            <section className='my-5' data-aos="fade-up" data-aos-delay="1500">
                <h1 className='text-3xl font-bold text-center' data-aos="fade-down" data-aos-delay="1600">Другие новости</h1>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-3'>
                    <div data-aos="zoom-in-up" data-aos-delay="1700">
                        <Cards img={Img3} />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="1800">
                        <Cards img={Img1} />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="1900">
                        <Cards img={Img2} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page