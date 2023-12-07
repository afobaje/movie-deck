import clsx from 'clsx'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

interface ButtonProps {
  text: string,
  classStyles?: string,
  handleClick?: () => void
  fullWidth?:boolean
}

export default function Button({ text, classStyles, handleClick,fullWidth }: ButtonProps) {
  return (
    // <button onClick={handleClick} className={clsx('rounded-md p-3', classStyles)}>
    //   {text}
    // </button>
    <button className={clsx('text-white inline-flex bg-blue-400 rounded-full  py-2 ',classStyles,fullWidth?'w-full':'')} onClick={handleClick}><span className='flex-1 '>{text}</span> <span className='bg-blue-300 w-6 h-6 inline-flex items-center justify-center rounded-lg mr-5'><AiOutlineArrowRight/></span></button>
  )
}
