'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { MovieCard } from '.'
import { MoviesProps } from '../../Types'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'
import { motion, scroll, useMotionValueEvent, useScroll } from 'framer-motion'
import { getAllMovies } from '../../Services'
import Skeleton from './Skeleton'




export default function MovieCatalogue() {

    const [isVisible, setIsVisible] = useState(false)
    

    const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPage) => {
        if (!previousPage) {
            return `https://movie-box-production.up.railway.app/?page=${pageIndex + 1}&limit=16`
        }
        if (previousPage && previousPage.next !== undefined) {
            return `https://movie-box-production.up.railway.app/?page=${previousPage.next.page}&limit=16`
        }
    }

    const { data, isLoading, error, size, setSize } = useSWRInfinite(getKey, getAllMovies, { initialSize: 1 })


    const observer = useRef<IntersectionObserver | null>(null!)
    const lastDivRef = useCallback((node: any) => {
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(entries => {
            let [entry] = entries
            setIsVisible(entry.isIntersecting)
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [])

    useEffect(() => {
        function loadMore() {
            if (isVisible) {
                setSize(prev => prev + 1)
            }
        }
        loadMore()
    }, [isVisible, setSize])




    




//     let convertedData=[]
//    function convertDataToArray(prevData:any,state:any){
//     if (prevData.length<state) {
//        for (let i = 0; i < prevData.length; i++) {
//         convertedData=[...convertedData,...prevData.results]
        
//        }
        
//     }

//    }


    


    return (
        <section className='flex px-10 md:px-10 py-10 justify-center  flex-col'>
            {/* <MovieSkeleton cardNumber={16} /> */}
            <div className='flex gap-2 flex-col'>
                <h2 className='font-semibold text-xl'>Latest Movies</h2>
                <p>Explore your latest block buster movies!</p>
            </div>
            <div className="movie-list py-10  grid  gap-y-14 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full ">
                {isLoading && <Skeleton cardNumber={16} />}
                {data && data.map((val: any) => {
                    return val.results.map((val: any, i: any) => <MovieCard movie={val} key={i} />)
                })}
                {isLoading && <Skeleton cardNumber={16} />}

            </div>
            <div className='' ref={lastDivRef}></div>

        </section>


    )
}
