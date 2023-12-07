import React from 'react'


export default function Skeleton({ cardNumber }: { cardNumber: number }) {
  let skeletonCards = Array.from({ length: cardNumber }, (_, index) => index + 1)

  return (
    <>
      {
        skeletonCards.map((_, i: number) => <div key={i} className="flex flex-col gap-2 h-[22.5rem] rounded-md opacity-30">
          <div className="h-[200px] rounded-md bg-slate-300"></div>
          <div className="p-4 h-[3rem] mt-5 bg-slate-300"></div>
          <div className="bg-slate-300 mt-3 h-[3rem] rounded-lg"></div>
        </div>)
      }
    </>
  )
}
