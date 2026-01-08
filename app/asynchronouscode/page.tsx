"use client"
import { ShimmerButton } from '@/components/ui/shimmer-button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const api = "http://localhost:3000/Products"

function Page() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
    const [openInfo, setOpenInfo] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setopenEdit] = useState(false)

    const [newName, setNewName] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [editName, setEditName] = useState('')
    const [editPrice, setEditPrice] = useState('')
    const [idx, setidx] = useState('')
    const [search, setSearch] = useState('')

    async function GetTodo() {
        try {
            const { data } = await axios.get(api)
            setProducts(data.data || data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetTodo()
    }, [])

    async function AddProd() {
        try {
            const newProd = {
                name: newName,
                price: newPrice
            }
            await axios.post(api, newProd)
            GetTodo()
            setOpenAdd(false)
            setNewName('')
            setNewPrice('')
        } catch (error) {
            console.error(error)
        }
    }

    async function DeleteProd(id) {
        try {
            await axios.delete(`${api}/${id}`)
            GetTodo()
        } catch (error) {
            console.error(error)
        }
    }

    async function EditProd() {
        try {
            const updatedData = {
                name: editName,
                price: editPrice
            }
            await axios.put(`${api}/${idx}`, updatedData)
            GetTodo()
            setopenEdit(false)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="p-8 bg-gray-50 dark:bg-[#1a1a1a] min-h-screen relative">
            <div className='flex gap-2 items-center'>
                <ShimmerButton onClick={() => setOpenAdd(true)} className="shadow-lg mb-4">Add new Product</ShimmerButton>
                <input className='bg-black rounded-sm py-2 px-3' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} type="search" />
            </div>

            {openAdd && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpenAdd(false)}></div>
                    <div className="relative bg-white dark:bg-[#2a2a2a] rounded-3xl p-8 w-full max-w-md animate-in zoom-in duration-300">
                        <h2 className="text-2xl font-bold mb-6 dark:text-white">New Product</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full p-3 border rounded-xl dark:text-black" />
                            <input type="number" placeholder="Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="w-full p-3 border rounded-xl dark:text-black" />
                            <ShimmerButton onClick={AddProd} className="w-full py-4">Create Product</ShimmerButton>
                        </div>
                    </div>
                </div>
            )}

            {openEdit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setopenEdit(false)}></div>
                    <div className="relative bg-white dark:bg-[#2a2a2a] rounded-3xl p-8 w-full max-w-md animate-in zoom-in duration-300">
                        <h2 className="text-2xl font-bold mb-6 dark:text-white">Edit Product</h2>
                        <div className="space-y-4">
                            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full p-3 border rounded-xl dark:text-black" />
                            <input type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} className="w-full p-3 border rounded-xl dark:text-black" />
                            <ShimmerButton onClick={EditProd} className="w-full py-4">Save Changes</ShimmerButton>
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
                {products?.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()))
                    .map((e) => (
                        <div key={e.id} className='group bg-white dark:bg-black border border-gray-200 dark:border-[#333] rounded-xl p-4 shadow-sm hover:-translate-y-1 transition-all'>
                            <div className="cursor-pointer" onClick={() => { setProduct(e); setOpenInfo(true); }}>
                                <h2 className='text-gray-400 text-[10px] uppercase font-bold'>Smartphone</h2>
                                <p className='text-lg font-bold dark:text-white truncate'>{e.name}</p>
                                <p className='text-blue-600 font-bold'>${e.price}</p>
                            </div>
                            <div className='flex gap-3 justify-end mt-4'>
                                <span onClick={() => DeleteProd(e.id)} className='cursor-pointer hover:text-red-500'>🗑️</span>
                                <span onClick={() => {
                                    setEditName(e.name);
                                    setEditPrice(e.price);
                                    setidx(e.id);
                                    setopenEdit(true);
                                }} className='cursor-pointer hover:text-blue-500'>✏️</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Page