"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import img from './../../images/image 19 (1).png'
import Cards from '@/src/components/Cards'
import img1 from '../../images/image (22).png'
import img2 from '../../images/image (21).png'
import img3 from '../../images/image 19.png'
import { useTranslations } from 'next-intl'
import AOS from "aos"

function page() {
    const t = useTranslations('News');
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])
    return (
        <main className='max-w-340.5 m-auto xl:px-0 px-3'>
            <section className='my-5'>
                <h1 className='text-4xl font-bold text-center' data-aos="fade-down">{t('title')}</h1><br />
                <section className='flex xl:flex-row flex-col-reverse items-start xl:gap-2 gap-3 justify-between border rounded-2xl p-3' data-aos="fade-up">
                    <aside className='xl:w-[50%] flex flex-col gap-4' data-aos="fade-right" data-aos-delay="200">
                        <h1 className='font-bold text-2xl' data-aos="fade-down" data-aos-delay="300">{t('company_title')}</h1>
                        <p className='text-gray-400' data-aos="fade-up" data-aos-delay="400">{t('desc_1')}</p>
                        <p className='text-gray-400' data-aos="fade-up" data-aos-delay="500">{t('desc_2')}</p>
                        <p className='text-gray-400' data-aos="fade-up" data-aos-delay="600">{t('desc_3')}</p>
                        <p className='text-[#FFA900] font-bold' data-aos="fade-up" data-aos-delay="700">{t('more')} {'>'}</p>
                    </aside>
                    <aside className='xl:w-[50%] md:w-full' data-aos="zoom-in" data-aos-delay="400">
                        <Image className='w-full xl:h-95 md:h- h-60' src={img} alt="" />
                    </aside>
                </section>
            </section>
            <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-3'>
                <div data-aos="zoom-in-up" data-aos-delay="200">
                    <Cards img={img1} />
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="400">
                    <Cards img={img2} />
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="600">
                    <Cards img={img3} />
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="200">
                    <Cards img={img3} />
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="400">
                    <Cards img={img1} />
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="600">
                    <Cards img={img2} />
                </div>
            </section>
        </main>
    )
}

export default page