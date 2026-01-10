import Image from "next/image";
import { useTranslations } from "next-intl";
import img13 from "./../app/images/Frame 1261154809.png";
import img14 from "./../app/images/logos_telegram.png";
import img15 from "./../app/images/logos_whatsapp-icon.png";


export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className=" mt-20">
            <section className="max-w-340.5 xl:gap-0 md:gap-5 gap-4 flex xl:flex-row flex-col justify-between items-center m-auto">
                <Image src={img13} alt="" />
                <ul className="flex md:flex-row flex-col md:text-start text-center font-semibold gap-10 ">
                    <li>{t('about')}</li>
                    <li>{t('map')}</li>
                    <li>{t('infrastructure')}</li>
                    <li>{t('partners')}</li>
                    <li>{t('news')}</li>
                    <li>{t('vacancies')}</li>
                </ul>
                <div className="flex gap-4 font-bold">
                    <Image src={img14} alt="" />
                    <Image src={img15} alt="" />
                </div>
            </section><br />
            <section className="border-t-2 py-2">
                <h1 className="text-center p-3 text-gray-400">Copyright © 2024 KAPITAL-T   |   {t('rights')} </h1>
            </section>
        </footer>
    );
}
