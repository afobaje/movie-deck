import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchDialogue() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {

        setIsOpen(true)
    }

    return (
        <>
        <button onClick={openModal} className='inline-block md:hidden'>
            <FiSearch/>
        </button>
            <button onClick={openModal} className='w-72 relative py-2 rounded-lg border-gray-300 border border-solid outline-none hidden md:inline-block  '>
                <span className=" absolute inset-0 left-2 top-3">
                    <FiSearch className='text-gray-300' />
                </span>
                <span className='text-sm text-gray-400'>
                    Quick search...
                </span>
            </button>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className="bg-white/70 flex flex-col  rounded-lg min-h-[60vh]">
                                        <div className="flex w-full p-2 border-b border-black/10">
                                            <div className="searchbar  w-full flex ">
                                                <span className='inline-flex flex-col justify-center items-center  rounded-r-lg' ><FiSearch className=' text-slate-700' /></span>
                                                <input type="text" className=' w-full   divide-y-reverse outline-none border-gray-300 px-3 py-2  rounded-l-lg' />
                                                <button onClick={() => { setIsOpen(false) }} className='  p-1 esc'><kbd className='text-xs rounded-xl p-2 border font-medium '>ESC</kbd></button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
