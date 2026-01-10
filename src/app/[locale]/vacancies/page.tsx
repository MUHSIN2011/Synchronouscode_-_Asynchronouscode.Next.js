"use client"
import { MapIcon, MapPin, Search, SlidersHorizontal } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import Link from 'next/link';
import AOS from "aos"
import { Button } from '@/src/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function page() {
    const [search, setSearch] = useState('');
    const [checked, setChecked] = useState(true);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [data, setData] = useState([]);

    const GetTodo = async () => {
        try {
            const { data } = await axios.get("https://68cc04d2716562cf50760cf0.mockapi.io/apiUser")
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetTodo()
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (
        <main className='max-w-345.5 m-auto xl:px-0 px-3 my-8'>
            <section className='flex items-start gap-5 px-5'>
                <aside className='w-[30%] xl:block hidden' data-aos="fade-right" data-aos-duration="1200">
                    <p className='font-bold' data-aos="fade-down" data-aos-delay="200">Регионы</p>
                    <div className='flex flex-col gap-1 bg-[#F9FAFB] dark:bg-black font-semibold p-2 rounded-sm mt-2' data-aos="zoom-in" data-aos-delay="300">
                        <div key="all"
                            className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg transition
                            ${selectedCities.length === 0 ? "bg-[#FFFFFF] dark:bg-[#1a1a1a]" : "bg-transparent"}`}
                            onClick={() => setSelectedCities([])}
                            data-aos="fade-up"
                            data-aos-delay="400">
                            <input type="checkbox" checked={selectedCities.length === 0} readOnly className="size-4 pointer-events-none" />
                            <p>All</p>
                        </div>
                        {data.length > 0 ? (
                            data.map((e: any, index: number) => (
                                <div key={e.id}
                                    className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg transition
                                        ${selectedCities.includes(e.city) ? "bg-[#FFFFFF] dark:bg-[#1a1a1a]" : "bg-transparent"}`}
                                    onClick={() => {
                                        if (selectedCities.includes(e.city)) {
                                            setSelectedCities(selectedCities.filter(city => city !== e.city))
                                        } else {
                                            setSelectedCities([...selectedCities, e.city])
                                        }
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay={`${500 + index * 100}`}>
                                    <input type="checkbox" checked={selectedCities.includes(e.city)} readOnly className="size-4 pointer-events-none" />
                                    <p>{e.city}</p>
                                </div>

                            ))
                        ) : (
                            <div className='flex flex-col items-center justify-center my-10 gap-2 text-center text-gray-400' data-aos="fade-up" data-aos-delay="500">
                                <h1 className='text-2xl font-bold'>Ничего не найдено</h1>
                            </div>
                        )}
                    </div>
                    <p className='font-bold mt-3' data-aos="fade-down" data-aos-delay="200">Категории</p>
                    <div className='flex flex-col gap-4 bg-[#F9FAFB]  dark:bg-black font-semibold p-2 rounded-sm mt-2' data-aos="zoom-in" data-aos-delay="300">
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="400">
                            <input checked={true} className='size-4' type="checkbox" />
                            <p>IT специалист</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="500">
                            <input className='size-4' type="checkbox" />
                            <p>Юрист</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="600">
                            <input className='size-4' type="checkbox" />
                            <p>Продажи, розничная торговля</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="700">
                            <input className='size-4' type="checkbox" />
                            <p>Административный персонал</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="800">
                            <input className='size-4' type="checkbox" />
                            <p>Маркетинг, реклама, дизайн</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="900">
                            <input className='size-4' type="checkbox" />
                            <p>Hr, кадры</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="1000">
                            <input className='size-4' type="checkbox" />
                            <p>Охрана, безопасность</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="1100">
                            <input className='size-4' type="checkbox" />
                            <p>Бухгалтерия, финансы</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="1200">
                            <input className='size-4' type="checkbox" />
                            <p>Руководители</p>
                        </div>
                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="1300">
                            <input className='size-4' type="checkbox" />
                            <p>Транспорт, логистика, склад</p>
                        </div>
                    </div>
                </aside>
                <aside className='xl:w-[65%]' data-aos="fade-left" data-aos-duration="1200">
                    <h1 className='text-4xl font-bold' data-aos="fade-down" data-aos-delay="200">Вакансии</h1><br />
                    <div className='flex gap-2' data-aos="zoom-in" data-aos-delay="300">
                        <div className="xl:hidden block">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="bg-[#FFA900] py-2 rounded-2xl px-4 text-white hover:bg-[#e69900]"
                                    >
                                        <SlidersHorizontal />
                                    </Button>
                                </SheetTrigger>

                                <SheetContent side="right" className=" sm:max-w-[340px] p-0 flex flex-col">
                                    <SheetHeader className="p-4 border-b">
                                        <SheetTitle className="text-left">Menu</SheetTitle>
                                    </SheetHeader>

                                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                                        <div data-aos="fade-right" data-aos-duration="1200">

                                            <p className="font-bold mb-2" data-aos="fade-down" data-aos-delay="200">Регионы</p>
                                            <div className="flex flex-col gap-1 bg-[#F9FAFB] dark:bg-[#111] font-semibold p-2 rounded-lg mb-6" data-aos="zoom-in" data-aos-delay="300">
                                                <div
                                                    className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg transition ${selectedCities.length === 0 ? "bg-white dark:bg-[#1a1a1a] shadow-sm" : "bg-transparent"
                                                        }`}
                                                    onClick={() => setSelectedCities([])}
                                                >
                                                    <input type="checkbox" checked={selectedCities.length === 0} readOnly className="size-4" />
                                                    <p>All</p>
                                                </div>

                                                {data.length > 0 ? (
                                                    data.map((e: any, index: number) => (
                                                        <div
                                                            key={e.id}
                                                            className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg transition ${selectedCities.includes(e.city) ? "bg-white dark:bg-[#1a1a1a] shadow-sm" : "bg-transparent"
                                                                }`}
                                                            onClick={() => {
                                                                if (selectedCities.includes(e.city)) {
                                                                    setSelectedCities(selectedCities.filter((city) => city !== e.city));
                                                                } else {
                                                                    setSelectedCities([...selectedCities, e.city]);
                                                                }
                                                            }}
                                                        >
                                                            <input type="checkbox" checked={selectedCities.includes(e.city)} readOnly className="size-4" />
                                                            <p>{e.city}</p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="py-6 text-center text-gray-400">
                                                        <h1 className="text-lg font-bold">Ничего не найдено</h1>
                                                    </div>
                                                )}
                                            </div>

                                            <p className="font-bold mb-2" data-aos="fade-down" data-aos-delay="200">Категории</p>
                                            <div className="flex flex-col gap-3 bg-[#F9FAFB] dark:bg-[#111] font-semibold p-3 rounded-lg" data-aos="zoom-in" data-aos-delay="300">
                                                {[
                                                    "IT специалист", "Юрист", "Продажи, розничная торговля",
                                                    "Административный персонал", "Маркетинг, реклама, дизайн",
                                                    "Hr, кадры", "Охрана, безопасность", "Бухгалтерия, финансы",
                                                    "Руководители", "Транспорт, логистика, склад"
                                                ].map((cat, i) => (
                                                    <div key={i} className="flex gap-2 items-center cursor-pointer hover:opacity-80">
                                                        <input className="size-4 cursor-pointer" type="checkbox" id={`cat-${i}`} />
                                                        <label htmlFor={`cat-${i}`} className="cursor-pointer text-sm leading-tight">{cat}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border-t bg-white dark:bg-black">
                                        <SheetTrigger asChild>
                                            <Button variant="outline" className="w-full">
                                                Close
                                            </Button>
                                        </SheetTrigger>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-[#F4F4F5] dark:bg-[#1a1a1a] py-2 px-3 rounded-2xl w-[100%]' placeholder='Введите вакансию' type="search" />
                        <button className='bg-[#FFA900] py-2 rounded-2xl px-4 text-white'><Search /></button>
                    </div>
                    <div className='grid grid-cols-1 gap-2 mt-2'>
                        {
                            data.length > 0 ? data.filter((e: any) => selectedCities.length === 0 ? true : selectedCities.includes(e.city))
                                .filter((e: any) => e.name.toLowerCase().includes(search.toLowerCase()))
                                .map((e: any, index: number) => (
                                    <div key={e.id} className='shadow-sm p-4 dark:border rounded-2xl flex flex-col gap-2' data-aos="fade-up" data-aos-delay={`${400 + index * 100}`}>
                                        <div className='flex justify-between items-center'>
                                            <p className='bg-black text-white p-1  rounded-sm' data-aos="flip-left" data-aos-delay={`${500 + index * 100}`}>Опыт от 1 года</p>
                                            <p className='flex items-center gap-1 ' data-aos="fade-up-right" data-aos-delay={`${500 + index * 100}`}><MapPin /> {e.city}</p>
                                        </div>
                                        <h1 className='font-bold text-[20px]' data-aos="fade-up" data-aos-delay={`${600 + index * 100}`}>{e.name}</h1>
                                        <p data-aos="fade-up" data-aos-delay={`${700 + index * 100}`}>{e.description}</p>
                                        <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay={`${800 + index * 100}`}>
                                            <Link href={`/vacancies/${e.id}`}>
                                                <button className='bg-[#FFA900] text-white rounded-2xl py-2 px-3 cursor-pointer'>Подробнее</button>
                                            </Link>
                                            <button className='border-[#FFA900] border text-[#FFA900] rounded-2xl py-2 px-3'>Подать завку</button>
                                        </div>
                                    </div>
                                )) : (
                                <div className='flex flex-col items-center justify-center mt-20 gap-2 text-center text-gray-400' data-aos="fade-up" data-aos-delay="400">
                                    <Search size={40} />
                                    <h1 className='text-2xl font-bold'>Ничего не найдено</h1>
                                    <p>К сожалению, у нас пока нет подходящих вакансий по вашему запросу.</p>
                                </div>
                            )
                        }
                    </div>
                </aside>
            </section>
        </main>
    )
}

export default page