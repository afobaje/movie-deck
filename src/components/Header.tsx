'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import SearchDialogue from './SearchDialogue'

export default function Header() {
   


    return (
        <header>
            <nav className='flex justify-between px-6 py-6'>
                <div className="logo"><Link href='/' className='text-xl font-bold'>MovieHubb</Link></div>
                {/* <div className="searchbar flex ">
                    <input type="text" value={searchValue} onChange={handleSearch} className='border  outline-none border-gray-300 px-3 py-2  rounded-l-lg' />
                    <button onClick={handleSubmit} className='bg-gray-300 inline-flex flex-col justify-center items-center  px-3  rounded-r-lg' ><FiSearch className=' text-slate-700' /></button>
                </div> */}
                {/* <button className='w-72 relative py-2 rounded-lg border-gray-300 border border-solid outline-none '>
                    <span className=" absolute inset-0 left-2 top-3">
                    <FiSearch className=' text-gray-300' />
                    </span>
                    <span className='text-sm text-gray-400'>

                    Quick search...
                    </span>
                </button> */}
                <div className="searchbar  flex">
                    <SearchDialogue/>
                </div>
                {/* <SearchDialogue/> */}
                <ul className="flex">
                    <li><a target='_blank' className='hover:text-[#2563eb] hover:underline' href="https://www.buymeacoffee.com/afobaje">Support Us</a></li>
                </ul>
            </nav>
        </header>
    )
}
