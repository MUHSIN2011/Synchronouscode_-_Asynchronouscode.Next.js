"use client"
import { useParams, useRouter } from 'next/navigation'
import Loading from '../loading'
import { Suspense } from 'react'
import { ShimmerButton } from '@/components/ui/shimmer-button'

function Page() {
    const router = useRouter()
    const { synchronouscodeById } = useParams()

    const products = [
        { name: 'Iphone 17 pro max', id: '1', price: '20000', desc: 'Навтарин модели Apple бо камераи беҳтарин.' },
        { name: 'Samsung S24 Ultra', id: '2', price: '15000', desc: 'Флагмани Samsung бо стилуси S-Pen.' },
        { name: 'Redmi Note 12', id: '3', price: '15000', desc: 'Смартфони дастрас ва босифат.' },
        { name: 'Xiaomi 14', id: '4', price: '15000', desc: 'Қудрати баланд дар ҳаҷми хурд.' },
        { name: 'Tecno Camon 30', id: '5', price: '15000', desc: 'Беҳтарин смартфон барои аксбардорӣ.' },
    ]

    const product = products.find((e) => e?.id == synchronouscodeById)

    if (!product) return <div className="p-10 text-center">Маҳсулот ёфт нашуд!</div>

    return (
        <Suspense fallback={<Loading />}>
            <div className="min-h-160 bg-gray-50 p-6 flex justify-center items-start">
                <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">

                    <div className="md:w-2/2 p-8 flex flex-col">
                        <button
                            onClick={() => router.back()}
                            className="text-sm text-blue-600 mb-6 flex items-center gap-2 hover:underline"
                        >← back</button>

                        <div className='text-center'>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                            <p className="text-gray-500 mb-6">{product.desc || "Маълумоти иловагӣ мавҷуд нест."}</p>

                            <div className="mt-auto">
                                <p className="text-sm text-gray-400 ">Price</p>
                                <p className="text-4xl font-black text-blue-600">${product.price}</p>
                                <ShimmerButton className='w-full mt-5'>Buy</ShimmerButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Suspense>
    )
}

export default Page