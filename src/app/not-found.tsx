import { CircleX } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex justify-center flex-col items-center gap-4 mt-70'>
            <CircleX size={40} />
            <h2 className='text-3xl font-bold'>404 Not Found</h2>
            <Link href="/"><span  className='text-blue-500 font-serif'>Return Home</span></Link>
        </div>
    )
}