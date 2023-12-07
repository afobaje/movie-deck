import { motion, useAnimate, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

let cont=[1,2,3,4,5]

export default function CardSet() {
  const [scope,animate]=useAnimate()
 
  // useEffect(()=>{

  //   console.log(scope,'chck')
  //   function checkAnimation(){
  //     if (scope.current.animations) {
  //       console.log('chek 1 3')
  //     }
  //   }
    
    
  //   checkAnimation()
  //   animate(scope.current,{scale:1.5},{duration:6})
  // },[scope])

  
const y=useMotionValue(0)
console.log(y.get())
const input=[-200,0,200]
const output=[0,1,0]
const opacity=useTransform(y,input,output)




// const x=useMotionValue(30)
// const input=[-1349,0,-1349]
// const output=[0,1,0]
// const transform=useTransform(x,input,output)




  return (
    <div className='w-full flex justify-center items-center bg-slate-300 min-h-[40vh]'>
      {/* <motion.ul ref={scope}     className="w-full h-full px-20 flex gap-3 justify-evenly">
        {cont.map((val,i)=><motion.li className='h-full w-[10vw] bg-amber-500' key={i}>{val}</motion.li>)}
      </motion.ul> */}
      <motion.div drag='y' style={{y,opacity}} transition={{type:'spring'}} className='bg-red-400 w-10 h-10'></motion.div>
    </div>
  )
}
