'use client';
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { MoviesProps } from '../../Types';
import { GrClose } from 'react-icons/gr'
import { Button } from '.';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function MovieDialogue({ movie }: { movie: MoviesProps }) {


    const router = useRouter();

    const [isOpen, setisOpen] = useState(false)

    function openModal() {
        setisOpen(true)
    }

    function closeModal() {
        setisOpen(false)
    }


    async function handleClick() {
        console.log('get this movie', movie)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ link: movie.link })
        // }
        // const data = await fetch('http://localhost:3002', requestOptions)
        // const res = await data.json()
        // console.log(res,movie,'fbi')
        router.push(`${movie.ID}`)
    }

    return (
        <>
            <button className='text-white font-miltea mt-5 py-3 w-full rounded-lg text-xl font-semibold bg-[#2563eb]' onClick={openModal}>View More</button>
            {/* <Button fullWidth={true} classStyles='ml-[18px]' text='View More' handleClick={openModal} /> */}

            <div className=''>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog className='relative' as='div' onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex items-center justify-center ">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel>
                                        <div className="flex font-miltea mt-10 md:mt-0 md:h-screen  justify-center items-center">
                                            <div className=" bg-white h-auto rounded-xl md:h-[80vh] max-w-[80vw] md:max-w-[70vw] grid grid-cols-1 md:grid-cols-2">
                                                <div className="img flex w-full md:h-[80vh] relative  ">
                                                    <img src={movie.imgSrc} className='flex md:rounded-s-lg  object-contain md:h-full w-full' alt="" />
                                                </div>
                                                <div className="details flex-col px-6 py-4 flex gap-5">
                                                    <div className='hidden md:flex justify-end'><button onClick={closeModal}><GrClose /></button></div>
                                                    <div className='flex flex-col gap-3'>
                                                        <h3 className="font-extrabold text-xl">Movie Title</h3>
                                                        <p className="font-normal">{movie.title}</p>
                                                    </div>
                                                    <div className=" flex flex-col gap-3">
                                                        <h3 className='font-extrabold text-xl'>Description</h3>
                                                        <p className=" ">{movie.description}</p>
                                                    </div>
                                                    <div className="flex mt-3 flex-col">
                                                        <Link href={`movies/${movie.ID}`} className='bg-[#2563eb] inline-flex justify-center text-white rounded-xl p-3'>GET THIS MOVIE</Link>
                                                    </div>
                                                    {/* <div className=" flex flex-col gap-3">
                                                        <p className='font-bold'>Link</p>
                                                        <a href={movie.link} target='_blank' className=" ">{movie.link}</a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>

                                </Transition.Child>

                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    )
}
