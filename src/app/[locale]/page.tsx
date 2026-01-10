"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import img1 from "./../images/unsplash_U2BI3GMnSSE.png";
import img2 from "./../images/unsplash_pYlBAu3de0w.png";
import img3 from "./../images/unsplash_nC6CyrVBtkU.png";
import img4 from "./../images/map-base 2 (1).png";
import img5 from "./../images/Group 2 (1).png";
import img6 from "./../images/Без названия 1.png";
import img7 from "./../images/image (19).png";
import img8 from "./../images/image 18.png";
import img9 from "./../images/image 15.png";
import img10 from "./../images/image 16.png";
import Img from './../images/image 19.png'
import Img11 from './../images/image (21).png'
import Img22 from './../images/image (22).png'
import AOS from "aos"
import { BrickWallShield, BriefcaseBusiness, Clock, HandshakeIcon, House, ImageUp, Locate, LocateIcon, Mail, MapPin, Phone, Truck, UserPlus, UserRoundPlus, Users, Van } from "lucide-react";
import SwipperHome from "@/src/components/swipperHome";
import { useEffect, useRef } from "react";
import Cards from "@/src/components/Cards";
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('HomePage');
  const b = useTranslations('About');
  const stats = useTranslations('Stats');
  const offices = useTranslations('Offices');
  const coverage = useTranslations('Coverage');
  const infrastructure = useTranslations('Infrastructure');
  const partners = useTranslations('Partners');
  const vacancies = useTranslations('Vacancies');
  const news = useTranslations('News');
  const contact = useTranslations('Contact');

  const partnerInputRef = useRef<HTMLInputElement>(null);
  const scrollToPartner = () => {
    partnerInputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setTimeout(() => {
      partnerInputRef.current?.focus();
    }, 500);
  };

  useEffect(() => {
    AOS.init({
      duration: 600, // камтар
      once: true,
      offset: 0,     // муҳим: баён мекунад аниматсия набояд scroll эҷод кунад
      disable: false
    })
  }, [])

  return (
    <main className="max-w-340 m-auto my-2 xl:px-0 md:px-3 px-3 ">
      <div data-aos="fade-up" data-aos-duration="600">
        <SwipperHome onPartnerClick={scrollToPartner} />
      </div>

      <section className="my-5">
        <h1 className="text-center xl:text-4xl md:text-3xl text-2xl font-bold" data-aos="fade-down" data-aos-duration="600">{b('title')}</h1>
        <p className="text-center xl:text-3xl md:text-[23px] font-semibold" data-aos="fade-down" data-aos-duration="600" data-aos-delay="100">{b('subtitle')}</p>
        <section className="mt-8 flex md:flex-row flex-col-reverse items-start gap-5 justify-between">
          <aside data-aos="fade-right" data-aos-duration="700">
            <div>
              <h1 className="text-[#FFA900] text-2xl mb-2 font-bold" data-aos="flip-left" data-aos-duration="600">{b('values_title')}</h1>
              <div className="border rounded-2xl w-full p-3" data-aos="zoom-in" data-aos-duration="600">
                <p>{b('values_desc')}</p>
              </div>
            </div>
            <div className="my-4">
              <h1 className="text-[#FFA900] text-2xl mb-2 font-bold" data-aos="flip-left" data-aos-duration="600" data-aos-delay="100">{b('goals_title')}</h1>
              <div className="border rounded-2xl w-full p-4 flex font-semibold flex-col gap-5" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
                <div className="flex items-center gap-2" data-aos="fade-up-right" data-aos-duration="600">
                  <div className="bg-[#F4F4F5] dark:bg-[#1a1a1a] p-2 rounded-sm">
                    <ImageUp />
                  </div>
                  <p>{b('goal_1')}</p>
                </div>
                <div className="flex items-center gap-2" data-aos="fade-up-right" data-aos-duration="600" data-aos-delay="100">
                  <div className="bg-[#F4F4F5] dark:bg-[#1a1a1a] p-2 rounded-sm">
                    <BriefcaseBusiness />
                  </div>
                  <p>{b('goal_2')}</p>
                </div>
                <div className="flex items-center gap-2" data-aos="fade-up-right" data-aos-duration="600" data-aos-delay="200">
                  <div className="bg-[#F4F4F5] dark:bg-[#1a1a1a] p-2 rounded-sm">
                    <UserRoundPlus />
                  </div>
                  <p>{b('goal_3')}</p>
                </div>
              </div>
            </div>
            <p data-aos="fade-up" data-aos-duration="600">{b('footer_text')}</p>
          </aside>
          <aside data-aos="zoom-in-up" data-aos-duration="700">
            <div className="flex flex-col gap-3">
              <Image className="w-full" src={img1} alt="" data-aos="zoom-in" data-aos-duration="600" />
              <div className="flex gap-2">
                <Image src={img2} alt="" data-aos="fade-left" data-aos-duration="600" />
                <Image src={img3} alt="" />
              </div>
            </div>
          </aside>
        </section>
      </section>

      <section
        style={{ backgroundImage: `url(${img4.src})` }}
        className="my-5 font-sans w-full bg-cover bg-no-repeat bg-center rounded-3xl"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          <div className="md:col-span-4 bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 flex items-start gap-4 shadow-sm" data-aos="flip-right" data-aos-duration="700">
            <div className="bg-gray-50 p-3 rounded-2xl">
              <Clock className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1D2939] dark:text-white">{stats('years')}</h2>
              <p className="text-gray-500 text-sm mt-1">{stats('years_desc')}</p>
            </div>
          </div>

          <div className="md:col-span-8 md:row-span-2 bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-sm relative overflow-hidden" data-aos="zoom-in" data-aos-duration="700">
            <div className="relative z-10">
              <h3 className="text-center text-lg font-bold mb-6 dark:text-white" data-aos="fade-down" data-aos-duration="600">{offices('main_offices')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50/50 dark:bg-[#1a1a1a] p-4 rounded-2xl border border-gray-100" data-aos="fade-up-right" data-aos-duration="600">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <MapPin className="w-4 h-4" /> {offices('dushanbe')}
                  </div>
                  <p className="text-sm text-gray-400">{offices('phone')}</p>
                  <p className="text-xs text-gray-400">{offices('address_dushanbe')}</p>
                </div>
                <div className="bg-gray-50/50 dark:bg-[#1a1a1a] p-4 rounded-2xl border border-gray-100" data-aos="fade-up-left" data-aos-duration="600" data-aos-delay="100">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <MapPin className="w-4 h-4" /> {offices('khujand')}
                  </div>
                  <p className="text-sm text-gray-400">{offices('phone')}</p>
                  <p className="text-xs text-gray-400">{offices('address_khujand')}</p>
                </div>
              </div>

              <h3 className="text-center text-sm font-bold mb-4 uppercase tracking-wider" data-aos="fade-down" data-aos-duration="600">{offices('branches')}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {offices('branch_cities').split(',').map((city: string, index: number) => (
                  <span key={city} className="bg-gray-100 px-4 py-2 dark:bg-[#1a1a1a] rounded-xl shadow-sm text-sm border border-gray-50" data-aos="zoom-in" data-aos-duration="600" data-aos-delay={`${index * 50}`}>
                    {city.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[150px]" data-aos="flip-up" data-aos-duration="700">
            <div className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-xl mb-4">
              <Users className="w-5 h-5 dark:text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1D2939] dark:text-white">{stats('employees')}</h2>
              <p className="text-gray-500 text-xs leading-tight mt-1">{stats('employees_desc')}</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[150px]" data-aos="flip-up" data-aos-duration="700" data-aos-delay="100">
            <div className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-xl mb-4">
              <Truck className="w-5 h-5 dark:text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1D2939] dark:text-white">{stats('deliveries')}</h2>
              <p className="text-gray-500 text-xs leading-tight mt-1">{stats('deliveries_desc')}</p>
            </div>
          </div>

        </div>
      </section>

      <section className="my-8">
        <h1 className="text-4xl dark:text-3xl font-semibold text-center" data-aos="fade-down" data-aos-duration="600">{coverage('title')}</h1>
        <div className="flex xl:flex-row flex-col-reverse justify-between xl:items-start itcems-center">
          <aside className="flex flex-col xl:items-start items-center gap-8">
            <div className="flex flex-col" data-aos="fade-right" data-aos-duration="700">
              <h1 className="text-5xl font-bold text-gray-200">{coverage('sogd')}</h1>
              <div className="flex gap-8 items-center">
                <div className="flex items-end">
                  <p className="text-4xl font-bold">2170</p>
                  <p>{coverage('akb')}</p>
                </div>
                <div className="flex items-end">
                  <p className="text-4xl font-bold">2110</p>
                  <p>{coverage('okb')}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col" data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
              <h1 className="text-5xl font-bold text-gray-200">{coverage('rrp_khatlon')}</h1>
              <div className="flex gap-8 items-center">
                <div className="flex items-end">
                  <p className="text-4xl font-bold">2170</p>
                  <p>{coverage('akb')}</p>
                </div>
                <div className="flex items-end">
                  <p className="text-4xl font-bold">2110</p>
                  <p>{coverage('okb')}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
              <h1 className="text-5xl font-bold text-gray-200">{coverage('gbao')}</h1>
              <div className="flex gap-8 items-center">
                <div className="flex items-end">
                  <p className="text-4xl font-bold">2170</p>
                  <p>{coverage('akb')}</p>
                </div>
                <div className="flex items-end">
                  <p className="text-4xl font-bold">2110</p>
                  <p>{coverage('okb')}</p>
                </div>
              </div>
            </div>
          </aside>
          <aside className="m-auto" data-aos="zoom-in" data-aos-duration="700">
            <Image src={img5} alt="" />
          </aside>
        </div>
      </section>

      <section className="my-5">
        <h1 className="text-3xl text-center font-bold my-2" data-aos="fade-down" data-aos-duration="600">{infrastructure('title')}</h1>
        <div className="grid xl:grid-cols-6 md:grid-cols-6 grid-cols-1 gap-2">
          <div className="flex flex-col items-center col-span-3 justify-center bg-[#FBFBFB] dark:bg-[#1a1a1a] rounded-2xl p-4" data-aos="zoom-in-up" data-aos-duration="600">
            <House className=" text-[#FFA900]" size={30} />
            <h3 className="text-4xl font-bold">{infrastructure('warehouse_area')}</h3>
            <p>{infrastructure('warehouse_label')}</p>
          </div>
          <div className="flex flex-col items-center col-span-3 justify-center bg-[#FBFBFB] dark:bg-[#1a1a1a] rounded-2xl p-4" data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="100">
            <Van className=" text-[#FFA900]" size={30} />
            <h3 className="text-4xl font-bold">{infrastructure('transport_area')}</h3>
            <p>{infrastructure('transport_label')}</p>
          </div>
          <div className="flex items-center gap-5 col-span-2 justify-center bg-[#FBFBFB] dark:bg-[#1a1a1a] rounded-2xl p-4" data-aos="fade-up" data-aos-duration="600">
            <div>
              <h3 className="text-4xl font-bold">{infrastructure('clients')}</h3>
              <p>{infrastructure('clients_label')}</p>
            </div>
            <UserPlus className=" text-[#FFA900]" size={35} />
          </div>
          <div className="flex items-center gap-5 col-span-2 justify-center bg-[#FBFBFB] dark:bg-[#1a1a1a] rounded-2xl p-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <div>
              <h3 className="text-4xl font-bold">{infrastructure('partners')}</h3>
              <p>{infrastructure('partners_label')}</p>
            </div>
            <HandshakeIcon className=" text-[#FFA900]" size={35} />
          </div>
          <div className="flex items-center gap-5 col-span-2 justify-center bg-[#FBFBFB] dark:bg-[#1a1a1a] rounded-2xl p-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <div>
              <h3 className="text-4xl font-bold">{infrastructure('security')}</h3>
              <p>{infrastructure('security_label')}</p>
            </div>
            <BrickWallShield className=" text-[#FFA900]" size={35} />
          </div>
        </div>
      </section>

      <section className="bg-[#111827] p-8 rounded-2xl flex flex-col gap-4" data-aos="fade-up" data-aos-duration="700">
        <h1 className="text-3xl text-center font-bold text-white" data-aos="fade-down" data-aos-duration="600">{partners('title')}</h1>
        <p className="text-center md:w-150 m-auto text-white" data-aos="fade-down" data-aos-duration="600" data-aos-delay="100">{partners('description')}</p>
        <div className="flex xl:gap-0 md:gap-1 gap-2 justify-between">
          <div className="bg-red-500 rounded-2xl w-40 p-1" data-aos="zoom-in" data-aos-duration="600">
            <Image src={img6} alt="" />
          </div>
          <div className="bg-white rounded-2xl w-40 p-1" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
            <Image src={img7} alt="" />
          </div>
          <div className="bg-white rounded-2xl w-40 p-1" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
            <Image src={img8} alt="" />
          </div>
          <div className="bg-white rounded-2xl w-40 p-1" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
            <Image src={img9} alt="" />
          </div>
          <div className=" rounded-2xl w-40 p-1" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
            <Image className='w-full h-full' src={img10} alt="" />
          </div>
        </div>
      </section>

      <section className="my-5">
        <h1 className="text-4xl text-center font-bold" data-aos="fade-down" data-aos-duration="600">{vacancies('title')}</h1><br />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <Link href="/newsbyId" data-aos="zoom-in-up" data-aos-duration="600">
            <Cards img={Img} />
          </Link>
          <Link href="/newsbyId" data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="100">
            <Cards img={Img11} />
          </Link>
          <Link href="/newsbyId" data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="200">
            <Cards img={Img22} />
          </Link>
        </div>
        <div className="flex justify-center my-3">
          <Link href="/newsbyId" data-aos="fade-up" data-aos-duration="600">
            <button className="bg-[#FFA900] py-2 px-3 text-white rounded-2xl cursor-pointer">{vacancies('all_news')} {'>'}</button>
          </Link>
        </div>
      </section>

      <section className="my-8">
        <h1 className="text-4xl font-bold text-center" data-aos="fade-down" data-aos-duration="600">{news('title')}</h1><br />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <div className="border p-4 rounded-2xl flex flex-col gap-2" data-aos="fade-up-right" data-aos-duration="600">
            <div className="flex justify-between items-center px-1">
              <p className="bg-[#1a1a1a] py-2 px-2 rounded-sm text-white">{news('experience')}</p>
              <p className="flex items-center gap-1"><span><MapPin /></span> {news('city')}</p>
            </div>
            <div className="px-1">
              <h1 className="text-2xl font-bold">{news('position')}</h1>
              <p>{news('description')}</p>
              <p className="text-[#FFA900]">{news('more')} {'>'}</p>
            </div>
          </div>
          <div className="border p-4 rounded-2xl flex flex-col gap-2" data-aos="fade-up" data-aos-duration="600">
            <div className="flex justify-between items-center px-1">
              <p className="bg-[#1a1a1a] py-2 px-2 rounded-sm text-white">{news('experience')}</p>
              <p className="flex items-center gap-1"><span><MapPin /></span> {news('city')}</p>
            </div>
            <div className="px-1">
              <h1 className="text-2xl font-bold">{news('position')}</h1>
              <p>{news('description')}</p>
              <p className="text-[#FFA900]">{news('more')} {'>'}</p>
            </div>
          </div>
          <div className="border p-4 rounded-2xl flex flex-col gap-2" >
            <div className="flex justify-between items-center px-1">
              <p className="bg-[#1a1a1a] py-2 px-2 rounded-sm text-white">{news('experience')}</p>
              <p className="flex items-center gap-1"><span><MapPin /></span> {news('city')}</p>
            </div>
            <div className="px-1">
              <h1 className="text-2xl font-bold">{news('position')}</h1>
              <p>{news('description')}</p>
              <p className="text-[#FFA900]">{news('more')} {'>'}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <Link href="/newsbyId" data-aos="fade-up" data-aos-duration="600">
            <button className="bg-[#FFA900] py-2 px-3 text-white rounded-2xl cursor-pointer">{news('all_news')} {'>'}</button>
          </Link>
        </div>
      </section>

      <section className="bg-[#E5E7EB] dark:bg-[#1a1a1a] rounded-3xl  md:p-8 p-3 flex md:flex-row flex-col justify-between gap-4" data-aos="fade-up" data-aos-duration="700">
        <aside data-aos="fade-right" data-aos-duration="700">
          <h1 className="text-3xl font-bold mb-2">{contact('become_partner')}</h1>
          <div className="flex flex-col gap-3">
            <input
              ref={partnerInputRef}
              className="rounded-2xl py-2 px-4 bg-white dark:bg-[#111111]"
              placeholder={contact('fullname')}
              type="text"
            />
            <input className="rounded-2xl py-2 px-4 bg-white dark:bg-[#111111]" placeholder={contact('company_name')} type="text" />
            <div className="flex gap-2 items-center">
              <input className="rounded-2xl w-full py-2 px-2 bg-white dark:bg-[#111111]" placeholder={contact('email')} type="text" />
              <input className="rounded-2xl w-full py-2 px-2 bg-white dark:bg-[#111111]" placeholder={contact('phone')} type="text" />
            </div>
            <input className="rounded-2xl py-2 px-4 bg-white dark:bg-[#111111]" placeholder={contact('upload_offer')} type="text" />
            <button className="bg-[#1E293B] py-2 px-2 rounded-2xl text-white">{contact('send')}</button>
          </div>
        </aside>
        <aside className="md:w-[40%]" >
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            style={{ border: 1 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full xl:h-70 md:h-50 rounded-2xl"
          />
          <div className="flex xl:flex-row flex-col justify-center md:gap-2 gap-2 mt-2">
            <button className="flex gap-2 justify-center bg-[#F4F4F5] dark:bg-[#111111] py-2 md:px-7 px-3 rounded-sm"><Mail /> {contact('email_address')}</button>
            <button className="flex gap-2 justify-center gap-1 bg-[#F4F4F5] dark:bg-[#111111] py-2 md:px-7 px-3 rounded-sm"><Phone /> {contact('phone_number')}</button>
          </div>
        </aside>
      </section>
    </main>
  );
}