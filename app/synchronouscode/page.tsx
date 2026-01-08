"use client"
import { ShimmerButton } from '@/components/ui/shimmer-button'
import React, { useState } from 'react'

function Page() {
    const [product, setProduct] = useState(null)
    const [openInfo, setOpenInfo] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setopenEdit] = useState(false)
    const [products, setProducts] = useState([
        { name: 'Iphone 17 pro max', id: '1', price: '20000' },
        { name: 'Samsung S24 Ultra', id: '2', price: '15000' },
        { name: 'Redmi Note 12', id: '3', price: '15000' },
        { name: 'Xiaomi 14', id: '4', price: '15000' },
        { name: 'Tecno Camon 30', id: '5', price: '15000' },
    ])
    const [newName, setNewName] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [editName, setEditName] = useState('')
    const [editPrice, setEditPrice] = useState('')
    const [idx, setidx] = useState('')
    const [search, setSearch] = useState('')

    function DeleteProd(id: string) {
        setProducts(products.filter((e) => e.id !== id))
    }

    return (
        <div className="p-8 bg-gray-50 dark:bg-[#1a1a1a] min-h-164 relative">
            <div className='flex gap-2 items-center'>
                <ShimmerButton onClick={() => setOpenAdd(true)} className=" shadow-lg mb-4">Add new User</ShimmerButton>
                <input className='bg-black rounded-sm py-2 px-3' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} type="search" />
            </div>

            {openAdd && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setOpenAdd(false)}
                    ></div>

                    <div className="relative bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">New Product</h2>
                                <button
                                    onClick={() => setOpenAdd(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-400 ml-1">PRODUCT NAME</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. iPhone 16 Pro"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        className="w-full mt-1 px-4 py-3 bg-gray-50 border  dark:text-black border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-400 ml-1">PRICE ($)</label>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={newPrice}
                                        onChange={(e) => setNewPrice(e.target.value)}
                                        className="w-full mt-1 px-4 py-3 bg-gray-50 border  dark:text-black border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" />
                                </div>
                            </div>

                            <div className="mt-8">
                                <ShimmerButton
                                    onClick={() => {
                                        const newProd = {
                                            id: Date.now().toString(),
                                            name: newName,
                                            price: newPrice
                                        };
                                        setProducts([...products, newProd]);
                                        setOpenAdd(false);
                                        setNewName('');
                                        setNewPrice('');
                                    }}
                                    className="w-full py-4 shadow-blue-200"
                                >Create Product</ShimmerButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {openEdit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setopenEdit(false)}
                    ></div>

                    <div className="relative bg-white dark:bg-[#1a1a1a] rounded-3xl dark:text-white shadow-2xl border border-gray-100  dark:border-black w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Product</h2>
                                <button
                                    onClick={() => setopenEdit(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                                >✕</button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-400 ml-1">PRODUCT NAME</label>
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        className="w-full mt-1 px-4 py-3 bg-gray-50 border dark:text-black border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-400 ml-1">PRICE ($)</label>
                                    <input
                                        type="number"
                                        value={editPrice}
                                        onChange={(e) => setEditPrice(e.target.value)}
                                        className="w-full mt-1 px-4 py-3 bg-gray-50  dark:text-black border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <ShimmerButton
                                    onClick={() => {
                                        const updatedProducts = products.map((item) =>
                                            item.id === idx
                                                ? { ...item, name: editName, price: editPrice }
                                                : item
                                        );

                                        setProducts(updatedProducts);
                                        setopenEdit(false);
                                        setEditName('');
                                        setEditPrice('');
                                    }}
                                    className="w-full py-4 shadow-blue-200"
                                >
                                    Save Changes
                                </ShimmerButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {openInfo && product && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setOpenInfo(false)}
                    ></div>

                    <div className="relative bg-white dark:border-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md overflow-hidden transform transition-all">
                        <div className="p-8 flex flex-col items-center text-center">
                            <button
                                onClick={() => setOpenInfo(false)}
                                className="absolute top-4 left-4 text-sm text-gray-400 hover:text-blue-600 transition-colors"
                            >← back</button>

                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-4xl mb-4">📱</div>

                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product?.name}</h1>
                            <p className="text-gray-500 mb-6 text-sm">
                                {product.desc}
                            </p>

                            <div className="w-full border-t pt-6">
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Price</p>
                                <p className="text-4xl font-black text-blue-600 mb-6">${product?.price}</p>
                                <ShimmerButton className="w-full shadow-lg">Buy Now</ShimmerButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products
                    .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
                    .map((e) => (
                        <div key={e.id} className='group bg-white dark:bg-black border flex items-end justify-between border-gray-200 dark:border-[#1a1a1a] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'>
                            <div className="cursor-pointer flex-1" onClick={() => { setProduct(e); setOpenInfo(true); }}>
                                <div className='mb-2'>
                                    <h2 className='text-gray-400 dark:text-gray-300 text-[10px] uppercase font-bold'>Smartphone</h2>
                                    <p className='text-lg font-bold  dark:text-white text-gray-800 truncate'>{e.name}</p>
                                    <p className='text-blue-600 font-bold'>${e.price}</p>
                                </div>
                            </div>

                            <div className='flex gap-3 text-gray-300 mb-2'>
                                <span onClick={() => DeleteProd(e.id)} className='hover:text-red-500 cursor-pointer transition-colors'>🗑️</span>
                                <span onClick={() => {
                                    setEditName(e.name);
                                    setEditPrice(e.price)
                                    setidx(e.id)
                                    setopenEdit(true)
                                }} className='hover:text-blue-500 cursor-pointer transition-colors'>✏️</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    )
}

export default Page