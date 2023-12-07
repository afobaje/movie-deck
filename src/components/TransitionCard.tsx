import { frame, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'
import { MoviesProps } from '../../Types'
// import Ticker from 'framer-motion'

let valueCards = [1, 2, 3, 4, 5,6,7,8,9]

export default function TransitionCard() {
  const x = useMotionValue(0)
  

  const translate = useTransform(x,[0,100],[100,0])


  


  return (
    <div className='bg-slate-300 overflow-x-hidden h-[60vh] flex-col flex '>



      {/* <Ticker></Ticker> */}

      <div className="flex gap-3">

      <ul className='h-full cavy gap-3 flex justify-evenly items-center '>

        {
          valueCards.map((val, i) => <li className='flex justify-center items-center bg-orange-300 rounded h-full w-28' key={i}>{val}</li>)
        }
      </ul>
      <ul className='h-full gap-3 cavy  flex justify-evenly items-center '>

{
  valueCards.map((val, i) => <li className='flex justify-center items-center bg-orange-300 rounded h-full w-28' key={i}>{val}</li>)
}
</ul>
<ul className='h-full gap-3 cavy flex justify-evenly items-center '>

{
  valueCards.map((val, i) => <li className='flex justify-center items-center bg-orange-300 rounded h-full w-28' key={i}>{val}</li>)
}
</ul>
      </div>
    </div>
  )
}
