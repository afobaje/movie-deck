'use client'
import useSwr from 'swr'
import React, { forwardRef } from 'react'
import { MoviesProps } from '../../Types'
import { MovieDialogue } from '.'
import { getMovies } from '../../Services'
import clsx from 'clsx'

type MovieCardProps= {
    movie: MoviesProps
}


export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <div  className={clsx('movie-card flex flex-col justify-between  gap-2  ' )}>

            <div className='rounded-md h-[200px] '>

                <img src={movie.imgSrc} className='w-full  h-full hover:rounded-none  transition-all rounded-md' alt={movie.description} />
            </div>
            <div className='p-4 flex flex-col items-center justify-center'>
                <p className='px-3 font-medium'>{movie.title}</p>
                <MovieDialogue movie={movie} />
                {/* <button className='text-white mt-5 py-3 w-full rounded-lg text-xl font-semibold bg-emerald-400' onClick={() => alert('clicked me')}>Download</button> */}

            </div>
        </div>
    )
}



// export default function MovieCard({ movie }: MovieCardProps) {


//     const lastRow = useCallback((node: any) => {
//         console.log(node, 'activate')
//     }, [])

//     return (
//         <div ref={lastRow} className='movie-card flex flex-col justify-between  gap-2  ' >

//             <div className='rounded-md h-[200px] '>

//                 <img src={movie.imgSrc} className='w-full object-cover h-full hover:rounded-none  transition-all rounded-md' alt={movie.description} />
//             </div>
//             <div className='p-4 flex flex-col items-center justify-center'>
//                 <p className='px-3 font-medium'>{movie.title}</p>
//                 <MovieDialogue movie={movie} />
//                 {/* <button className='text-white mt-5 py-3 w-full rounded-lg text-xl font-semibold bg-emerald-400' onClick={() => alert('clicked me')}>Download</button> */}

//             </div>
//         </div>
//     )
// }
