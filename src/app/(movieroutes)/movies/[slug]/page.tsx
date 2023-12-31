'use client'
import React, { useState } from 'react'
import useSwr from 'swr'
import { Button } from '@/components'
import { useRouter } from 'next/navigation'
import { MoviesProps } from '../../../../../Types'
import { getAllMovies, getMovies } from '../../../../../Services'
import Image from 'next/image'
import { PiSpinnerBold } from 'react-icons/pi'
import Link from 'next/link'
import DetailsSkeleton from '@/components/DetailsSkeleton'
import clsx from 'clsx'

export default function Movie({ params }: { params: { slug: string } }) {

  const routeId = parseInt(params.slug)
  const {data,error,isLoading}=useSwr(`https://movie-box-production.up.railway.app/selected?movie=${routeId}`,getAllMovies)
  // const { data, error, isLoading } = useSwr(`http://localhost:3002/selected?movie=${routeId}`, getAllMovies)
  const [download, setDownload] = useState(false)
  const links = data && JSON.parse(data?.DOWNLOADLINKS)

  const [loading, setLoading] = useState(false)

  function handleDownload() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDownload(true)
    }, 3000);
  }



  return (


    <section className="flex flex-col font-miltea ">
      {isLoading ? <div className=' flex h-screen justify-center items-center '>
        <PiSpinnerBold className='w-10 h-10 spin' />
      </div> :
        <div className='flex flex-col md:flex-row min-h-[50vh] justify-evenly gap-3 px-10'>

          <div className="img-container  flex md:w-1/2 h-[70vh]">
            <img src={data?.imgSrc} className='w-full object-contain bg-slate-200 rounded-md h-full ' alt="" />
          </div>
          <div className='p-4 md:w-1/2 flex gap-5 justify-center  flex-col'>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <div>

              <button disabled={loading||download} onClick={handleDownload} className={clsx(' text-white p-3 rounded',loading||download?'bg-blue-300':'bg-[#2563eb]')}>{loading?'Loading':'Download'}</button>
              {/* <Button handleClick={() => setDownload(true)} text='Download' classStyles='font-semibold' fullWidth={true} /> */}
            </div>
            <div className='flex flex-col gap-2 mt-10 h-[50vh]'>
              {download && links !== null && links.map((val: any, i: any) => <Link target='_blank' className=' underline truncate text-[#2563eb]' key={i} href={val}>{val}</Link>)}
              {download && links == null ? <p>I am sorry, we checked everywhere but we cant give you this file currently, kindly check in later or go through this <Link className='hover:underline hover:text-[#2563eb]' target='_blank' href={data.DOWNLOAD}>link</Link></p> : null}
            </div>
          </div>
        </div>
      }
    </section>

  )
}
