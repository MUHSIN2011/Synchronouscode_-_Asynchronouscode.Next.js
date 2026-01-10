"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/src/components/ui/dialog';
import { MapPin } from 'lucide-react'
import { Input } from '@/src/components/ui/input';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import AOS from "aos"

function page() {
    const t = useTranslations('VacancyDetail');
    const common = useTranslations('Common');

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        })
    }, [])

    return (
        <main className='max-w-340.5 m-auto my-5 xl:px-0 px-3'>
            <section data-aos="fade-up" data-aos-duration="800">
                <h1 className='text-4xl font-bold text-center ' data-aos="fade-down" data-aos-duration="800">{t('title')}</h1>
                <div className='flex items-center gap-3 justify-center mt-3' data-aos="zoom-in" data-aos-duration="800">
                    <p className='bg-black text-white p-1 rounded-sm' data-aos="flip-left" data-aos-duration="800">{t('experience')}</p>
                    <p className='flex items-center gap-1' data-aos="fade-up-right" data-aos-duration="800"><MapPin /> {t('city')}</p>
                </div>
                <section className='flex gap-10 items-start justify-between'>
                    <aside className='w-[70%] flex flex-col gap-6 ' data-aos="fade-right" data-aos-duration="800">
                        <div className='flex flex-col gap-3 items-start' data-aos="fade-up" data-aos-duration="800">
                            <ul className='list-disc font-semibold'>
                                <li data-aos="fade-up-right" data-aos-duration="800">{t('position')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="100">{t('full_time')}</li>
                            </ul>
                            <h1 className='font-bold text-2xl' data-aos="fade-down" data-aos-duration="800">{t('about_company')}</h1>
                            <p data-aos="fade-up" data-aos-duration="800">{t('company_desc')}</p>
                            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">{t('looking_for')}</p>
                            <ul className='list-disc flex flex-col gap-1 font-semibold'>
                                <li data-aos="fade-up-right" data-aos-duration="800">{t('quality_1')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="100">{t('quality_2')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="200">{t('quality_3')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="300">{t('quality_4')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="400">{t('quality_5')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="500">{t('quality_6')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="600">{t('quality_7')}</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3 items-start' data-aos="fade-up" data-aos-duration="800">
                            <h1 className='font-bold text-[22px]' data-aos="fade-down" data-aos-duration="800">{t('expectations')}</h1>
                            <ul className='list-disc flex flex-col gap-1 font-semibold'>
                                <li data-aos="fade-up-right" data-aos-duration="800">{t('expect_1')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="100">{t('expect_2')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="200">{t('expect_3')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="300">{t('expect_4')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="400">{t('expect_5')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="500">{t('expect_6')}</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3 items-start' data-aos="fade-up" data-aos-duration="800">
                            <h1 className='font-bold text-[22px]' data-aos="fade-down" data-aos-duration="800">{t('important')}</h1>
                            <p data-aos="fade-up" data-aos-duration="800">{t('important_desc')}</p>
                        </div>
                        <div className='flex flex-col gap-3 items-start' data-aos="fade-up" data-aos-duration="800">
                            <h1 className='font-bold text-[22px]' data-aos="fade-down" data-aos-duration="800">{t('responsibilities')}</h1>
                            <ul className='list-disc flex flex-col gap-1 font-semibold'>
                                <li data-aos="fade-up-right" data-aos-duration="800">{t('resp_1')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="100">{t('resp_2')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="200">{t('resp_3')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="300">{t('resp_4')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="400">{t('resp_5')}</li>
                                <li data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="500">{t('resp_6')}</li>
                            </ul>
                        </div>
                    </aside>
                    <aside className='w-[30%]' data-aos="fade-left" data-aos-duration="800">
                        <div className='border p-3 rounded-2xl flex flex-col gap-2' data-aos="zoom-in" data-aos-duration="800">
                            <h1 className='text-2xl font-semibold' data-aos="fade-down" data-aos-duration="800">{t('interested')}</h1>
                            <p data-aos="fade-up" data-aos-duration="800">{t('interested_desc')}</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className='bg-[#FFA900] text-white rounded-2xl py-2 px-3' data-aos="flip-up" data-aos-duration="800">{t('apply_btn')}</button>
                                </DialogTrigger>
                                <DialogContent className='w-80'>
                                    <DialogHeader>
                                        <DialogTitle data-aos="fade-down" data-aos-duration="600">{t('apply_title')}</DialogTitle>
                                        <DialogDescription className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <div data-aos="fade-up" data-aos-duration="600">
                                                    <Input placeholder={t('fullname')} type="text" />
                                                </div>
                                                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                                    <Input placeholder={t('email')} type="text" />
                                                </div>
                                                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                                    <Input placeholder={t('phone')} type="text" />
                                                </div>
                                                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                                    <Input placeholder={t('file')} type="file" />
                                                </div>
                                                <button className='bg-[#1E293B] py-2 rounded-2xl text-white' data-aos="flip-up" data-aos-duration="600" data-aos-delay="400">{t('send')}</button>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </aside>
                </section>
            </section>
            <section className='my-6' data-aos="fade-up" data-aos-duration="800">
                <h1 className='text-2xl font-bold text-center' data-aos="fade-down" data-aos-duration="800">{t('other_vacancies')}</h1>
                <div className='grid grid-cols-3 gap-3 mt-3'>
                    <div className="border p-4 rounded-2xl flex flex-col gap-2" data-aos="zoom-in-up" data-aos-duration="800">
                        <div className="flex justify-between items-center px-1" data-aos="fade-up" data-aos-duration="800">
                            <p className="bg-[#1a1a1a] py-2 px-2 rounded-sm text-white" data-aos="flip-left" data-aos-duration="800">{t('experience')}</p>
                            <p className="flex items-center gap-1" data-aos="fade-up-right" data-aos-duration="800"><span><MapPin /></span> {t('dushanbe')}</p>
                        </div>
                        <div className="px-1 pt-2" data-aos="fade-up" data-aos-duration="800">
                            <h1 className="text-2xl font-bold">{t('sales_rep')}</h1><br />
                            <div className='flex gap-1'>
                                <button className='bg-[#FFA900] text-white py-2 px-3 rounded-2xl' data-aos="flip-up" data-aos-duration="800">{t('more')}</button>
                                <button className='border-[#FFA900] border text-[#FFA900] py-2 px-3 rounded-2xl' data-aos="flip-up" data-aos-duration="800" data-aos-delay="100">{t('apply')}</button>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 rounded-2xl flex flex-col gap-2" data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="100">
                        <div className="flex justify-between items-center px-1" data-aos="fade-up" data-aos-duration="800">
                            <p className="bg-[#1a1a1a] py-2 px-2 rounded-sm text-white" data-aos="flip-left" data-aos-duration="800">{t('experience')}</p>
                            <p className="flex items-center gap-1" data-aos="fade-up-right" data-aos-duration="800"><span><MapPin /></span> {t('khujand')}</p>
                        </div>
                        <div className="px-1 pt-2" data-aos="fade-up" data-aos-duration="800">
                            <h1 className="text-2xl font-bold">{t('merchandiser')}</h1><br />
                            <div className='flex gap-1'>
                                <button className='bg-[#FFA900] text-white py-2 px-3 rounded-2xl' data-aos="flip-up" data-aos-duration="800">{t('more')}</button>
                                <button className='border-[#FFA900] border text-[#FFA900] py-2 px-3 rounded-2xl' data-aos="flip-up" data-aos-duration="800" data-aos-delay="100">{t('apply')}</button>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 rounded-2xl flex flex-col gap-2" data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="200">
                        <div className="flex justify-between items-center px-1" data-aos="fade-up" data-aos-duration="800">
                            <p className="bg-[#1a1a1a] py-2 px-2 rounded-sm text-white" data-aos="flip-left" data-aos-duration="800">{t('experience')}</p>
                            <p className="flex items-center gap-1" data-aos="fade-up-right" data-aos-duration="800"><span><MapPin /></span> {t('bokhtar')}</p>
                        </div>
                        <div className="px-1 pt-2" data-aos="fade-up" data-aos-duration="800">
                            <h1 className="text-2xl font-bold">{t('supervisor')}</h1><br />
                            <div className='flex gap-1'>
                                <button className='bg-[#FFA900] text-white py-2 px-3 rounded-2xl' data-aos="flip-up" data-aos-duration="800">{t('more')}</button>
                                <button className='border-[#FFA900] border text-[#FFA900] py-2 px-3 rounded-2xl' data-aos="flip-up" data-aos-duration="800" data-aos-delay="100">{t('apply')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page