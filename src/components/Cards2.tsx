import { MapPin } from 'lucide-react'
import React from 'react'

function Cards2() {
    return (
        <div className="border p-4 rounded-2xl flex flex-col gap-2">
            <div className="flex justify-between items-center px-1">
                <p className="bg-[#1a1a1a] py-2 px-2 rounded-sm text-white">Опыт от 1 года</p>
                <p className="flex items-center gap-1"><span><MapPin /></span> Душанбе</p>
            </div>
            <div className="px-1">
                <h1 className="text-2xl font-bold">Торговый представитель </h1>
                <p>Супервайзер отдела продаж, Душанбе и РРП1 О компании: Мы — развивающийся производитель туалетного и хозяйственного мыла</p>
                <p className="text-[#FFA900]">Подробнее {'>'}</p>
            </div>
        </div>
    )
}

export default Cards2