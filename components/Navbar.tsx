import Link from 'next/link'
import React from 'react'
import { ShimmerButton } from './ui/shimmer-button'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'

function Navbar() {
    return (
        <nav className='flex bg-gray-50 dark:bg-[#1a1a1a] items-center justify-center gap-5 py-3'>
            <Link href="/synchronouscode"><ShimmerButton>Synchronous code</ShimmerButton></Link>
            <AnimatedThemeToggler />
            <Link href="/asynchronouscode"><ShimmerButton>Asynchronous code</ShimmerButton></Link>
        </nav>
    )
}

export default Navbar