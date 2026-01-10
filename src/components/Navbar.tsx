"use client";
import { Link, usePathname, useRouter } from "../i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import Image from "next/image";
import img from '../app/images/image 9.png'
import img1 from '../app/images/menu.png'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/src/components/ui/drawer";
import { Button } from "./ui/button";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


function Navbar() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('HomePage');
    const b = useTranslations('Menu');

    const pathname = usePathname();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value as "en" | "ru";

        router.replace(pathname, { locale: nextLocale });
    };

    const getLinkStyle = (path: string) =>
        pathname === path
            ? "text-[#FFA900]"
            : "hover:text-[#FFA900] text-black dark:text-white";

    return (
        <nav className="flex items-center justify-between max-w-[1362px] mt-4 m-auto px-4">
            <Link href="/">
                <Image
                    src={img}
                    alt="Logo"
                    className="w-15"
                />
            </Link>

            <ul className="hidden xl:flex md:hidden items-center font-semibold gap-[60px]">

                <li className={`${getLinkStyle('/about')} cursor-pointer transition-colors`}>
                    {t('nav_about')}
                </li>

                <li className={`${getLinkStyle('/coverage')} cursor-pointer transition-colors`}>
                    {t('nav_coverage')}
                </li>

                <li className={`${getLinkStyle('/infrastructure')} cursor-pointer transition-colors`}>
                    {t('nav_infrastructure')}
                </li>

                <li className={`${getLinkStyle('/partners')} cursor-pointer transition-colors`}>
                    {t('nav_partners')}
                </li>

                <Link href="/news" className={`${getLinkStyle('/news')} cursor-pointer transition-colors`}>
                    {t('nav_news')}
                </Link>

                <Link href="/vacancies" className={`${getLinkStyle('/vacancies')} cursor-pointer transition-colors`}>
                    {t('nav_vacancies')}
                </Link>
            </ul>
            <div className="flex  items-center gap-2">
                <AnimatedThemeToggler />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 p-1"
                        >
                            <Image src={img1} alt="" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className=" sm:max-w-[340px] p-0 flex flex-col">
                        <SheetHeader className="p-4 border-b">
                            <SheetTitle className="text-left">{b('title')}</SheetTitle>
                        </SheetHeader>

                        <div className="flex-1 overflow-y-auto py-4">
                            <div className="flex items-center bg-gray-100 rounded-full p-1 mx-4 mb-6 shadow-sm">
                                {["ru", "en", "tj"].map((lang) => (
                                    <Link
                                        key={lang}
                                        href={pathname}
                                        locale={lang}
                                        className={`flex-1 text-center py-1.5 text-sm font-medium rounded-full transition-all ${locale === lang
                                            ? "bg-red-600 text-white shadow"
                                            : "text-gray-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        {lang.toUpperCase()}
                                    </Link>
                                ))}
                            </div>

                            <nav className="px-6 space-y-4 text-lg">
                                <Link href="/" className="block hover:text-red-600 transition-colors">{b('home')}</Link>
                                <Link href="/about" className="block hover:text-red-600 transition-colors">{b('about')}</Link>
                                <Link href="/map" className="block hover:text-red-600 transition-colors">{b('map')}</Link>
                                <Link href="/infrastructure" className="block hover:text-red-600 transition-colors">{b('infrastructure')}</Link>
                                <Link href="/partners" className="block hover:text-red-600 transition-colors">{b('partners')}</Link>
                                <Link href="/news" className="block hover:text-red-600 transition-colors">{b('news')}</Link>
                                <Link href="/vacancies" className="block hover:text-red-600 transition-colors">{b('vacancies')}</Link>
                            </nav>

                            <hr className="my-6 mx-6" />

                            <div className="px-6">
                                <p className="font-semibold text-gray-500 mb-4">{b('contact_us')}</p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <MessageCircle className="cursor-pointer hover:text-red-600" />
                                        <Instagram className="cursor-pointer hover:text-red-600" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={20} className="text-red-600" />
                                        <p className="font-bold text-lg">+992 914049999</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t">
                            <SheetTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    {b('close')}
                                </Button>
                            </SheetTrigger>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav >
    )
}

export default Navbar