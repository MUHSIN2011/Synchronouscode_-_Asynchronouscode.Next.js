import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface CardsProps {
    img: StaticImageData | string;
}

function Cards({ img }: CardsProps) {
    return (
        <div className="border p-2 rounded-2xl hover:translate-y-1 duration-300 hover:shadow-sm">
            <Image className="rounded-2xl w-full" src={img} alt="" />
            <div className="px-2">
                <h1 className="text-2xl font-bold">Title </h1>
                <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <p className="text-[#FFA900]">Подробнее {'>'}</p>
            </div>
        </div>
    )
}

export default Cards