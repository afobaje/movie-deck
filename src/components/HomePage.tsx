'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Rubik, Dai_Banna_SIL } from '@next/font/google'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { animate } from 'motion'
import { MoviesProps } from '../../Types'
import { motion } from 'framer-motion'
// const rubik = Rubik({ subsets: ['latin'] })

import styles from './../styles/homepage.module.css'
import Link from 'next/link'
import CardSet from './CardSet'
import TransitionCard from './TransitionCard'
import Ticker from './Ticker'



// const daiBannaSil = Dai_Banna_SIL({ subsets: ['latin', 'latin-ext', 'new-tai-lue'], weight: ['300', '400', '500', '600', '700'] })


const subtitles = [
  { colorName: 'Binge', colorCode: '#fc440f', shadowCode: '#fc440f47' },
  { colorName: 'Stream', colorCode: '#1effbc', shadowCode: '#1effbc33' },
  { colorName: 'Download', colorCode: '#06a77d', shadowCode: '#06a77d50' },
  { colorName: 'Watch', colorCode: '#2563eb', shadowCode: '#2563eb60' }
]
// { colorName: 'Watch', colorCode: '#ffc857', shadowCode: '#ffc85770' }]


// const a=Object.groupBy(subtitles,subtitle=>subtitle.colorName)
// console.log(a,'check nemesis')



export default function HomePage({ movies }: any) {


  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const [duration, setDuration] = useState(15)
  // const [currentMouse, setCurrentMouse] = useState(true)
  let selected = movies.slice(0, 10)





  function handleMouseOver() {
    setDuration(250)
  }
  function handleMouseLeave() {
    setDuration(30)
  }

  function getWord() {
    setCurrentWordIndex(prev => (prev + 1) % subtitles.length)
  }




  useEffect(() => {
    const intervalId = setInterval(getWord, 1500)
    return () => {
      clearInterval(intervalId)
    }
  }, [currentWordIndex])



  const check = useRef(null!)

  const isInView = useInView(check, { once: true })







  return (

    <main className=''>
      <header className='py-5  flex justify-between mx-5 md:mx-10'>
        <Link href='/' className="logo  font-extrabold text-xl">MovieHubb</Link>
        <Link href='/movies' className={clsx('bg-[#2563eb]  font-normal shadow text-white px-4 outline-none  py-2 rounded ')}>Get Started</Link>
        {/* <button className='bg-blue-500 text-white font-bold rounded px-4 py-2 shadow'>Get Started</button> */}
      </header>
      <section className='flex flex-col' >

        <article className='  flex flex-col text-center items-center min-h-[90vh] '>
          <div className='text-3xl md:text-5xl px-4 pt-40 mx-auto text-center items-center flex flex-col'>
            <p><span style={{
              color: `${subtitles[currentWordIndex].colorCode}`,
              boxShadow: `${subtitles[currentWordIndex].shadowCode} 0px -23px 0px inset`,
            }} >{subtitles[currentWordIndex].colorName}</span> top Quality movies and shows anytime, </p>
            <p> anywhere and on any device
            </p>
          </div>

          <div className='pt-10 text-center text-lg md:text-2xl'>

            <p>Get all your quality movie for free. </p>
            <p>No hidden charges, no ads</p>
          </div>
          <div className="pt-10">
            <Link href='/movies' className={clsx('bg-[#2563eb] text-white px-4 outline-none  py-2 rounded text-xl')}>Get Started</Link>
            {/* <button onClick={() => alert('olorun mani')} className={clsx('bg-blue-600 text-white px-4 outline-none  py-2 rounded text-xl')}>Get Started</button> */}
          </div>
        </article>
        {/* <div className="bg-orange-500 min-h-[800vh] min-w-[200vw] overflow-y-scroll" onScroll={handleClick}><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam praesentium perferendis similique reprehenderit possimus, adipisci odit quas eum laborum distinctio. Esse ullam modi, nostrum vero magni, adipisci animi quam similique laborum pariatur exercitationem unde molestiae quaerat voluptatem dolorum magnam assumenda dolores! Impedit explicabo commodi illo sapiente. Eius maxime odit veritatis dolore minima doloribus autem libero repellendus, alias nostrum nulla vero error architecto aspernatur molestias distinctio optio magnam provident a mollitia molestiae illum voluptate! Magnam praesentium animi nemo sint exercitationem consectetur repellendus tenetur rem dicta itaque. Reiciendis quidem molestiae aliquam quasi debitis harum architecto reprehenderit maxime labore. Eaque nostrum illum, natus, temporibus necessitatibus delectus nihil commodi aut ipsum rem aliquid, inventore suscipit. Natus provident vitae rem, at ut voluptate voluptatem corrupti dolorem officiis repellat rerum eum possimus saepe distinctio quibusdam architecto consectetur nam aliquid veritatis ducimus reiciendis. Amet velit officiis debitis nisi adipisci quas, excepturi temporibus architecto, vel modi expedita asperiores. Aliquam perferendis numquam error eaque omnis culpa recusandae, et unde nostrum qui voluptatibus quidem id nihil dicta odit eveniet iusto esse in quas! Sed dolorum quas cumque. Odit at, sequi aliquid nobis adipisci suscipit delectus earum tenetur maiores minima nesciunt reprehenderit quo ipsam nam nihil, non vitae deleniti alias sapiente dolorum veritatis! Recusandae, est. Iure placeat nihil consectetur fugiat ex optio mollitia ut numquam ipsa eaque corporis harum in nostrum suscipit eos, ducimus vero porro. Inventore corporis laborum illo. Doloremque vitae earum eum fugit magni tempora molestiae hic eaque. Sed, sapiente nisi, assumenda ab corrupti doloremque, voluptatibus quos corporis molestiae quo eos unde possimus voluptatum facere iure veniam neque ex repellat alias fugit adipisci esse sit. Ipsam explicabo incidunt, fugit aspernatur, earum voluptatum qui sequi deserunt perspiciatis, nostrum quas et voluptate nisi! Doloremque excepturi quod magnam aliquid ut nobis voluptas. Exercitationem, cumque blanditiis. Esse laboriosam ipsum ab, veniam sunt numquam officiis sint quasi, facilis nostrum incidunt maiores saepe! Non doloremque, recusandae maxime placeat ratione praesentium quam at cum beatae in fuga! Ipsa ipsam sunt in, at perferendis natus repellat ab quae provident atque deleniti sint magnam culpa hic autem, totam eveniet amet dicta itaque impedit tempore? Molestias ad sint dolores eaque possimus aspernatur quo, fugit error odit nam totam illo nesciunt cum, cumque est. Accusamus consequatur dolores, neque ipsum asperiores fugit adipisci beatae nulla ea reprehenderit. Vel quasi itaque mollitia voluptatibus voluptas magnam sit voluptatem saepe molestias neque provident impedit, quaerat a eius? Sint consectetur eius, delectus eum, cum sequi veniam dolorem hic, deleniti et distinctio iste nam! Aspernatur fugiat excepturi deserunt dicta saepe, asperiores animi eum ad corporis pariatur reiciendis aliquam architecto nesciunt esse error itaque optio doloribus quisquam!</p></div> */}

        <article className=''>

          <div className=' text-2xl md:min-h-[80vh] md:text-4xl flex justify-center flex-col items-center text-center leading-snug'>
            <h2>Experience no more downtime with families and friends</h2>
            <h2>Think a movie, stream a movie</h2>
          </div>
          <div className='flex flex-col justify-center w-full min-h-[70vh] text-center items-center'>
            <h3 className='text-3xl'>Over <span className='text-blue-600'>350</span>   downloads <br /> and streams daily.</h3>
          </div>
        </article>
        <article className={clsx('h-[40vh] font-miltea px-5 md:px-0 md:h-screen bg-[#8b98e8] flex justify-center items-center')}>
          <div ref={check} style={{ opacity: isInView ? 1 : 0.5, transitionDelay: '100ms' }} className={clsx('text-3xl deviate justify-center  leading-relaxed text-center')}>
            <p className='text-xl md:text-3xl'>Deviate from the norm, be up to date, check out the latest</p>
            <p className='text-xl md:text-3xl'>movie, documentary and sports flash in a jiffy</p>
          </div>
        </article>
        <section className="values font-recoleta">

          <h2 className='text-[rgb(237,233,2333)] text-xl md:text-2xl pl-4 md:pl-0 py-4 md:py-10 flex justify-center items-center'>Download a movie in 3 simple steps</h2>
          <div className="values-wrapper">
            <ul className="gle">
              <li className="step">
                <div className="number">
                  <span>1</span>
                </div>
                <div className="content">
                  <h2 className="text-xl md:text-2xl">Click on any movie you would love to watch/stream</h2>
                </div>
              </li>
              <li className="step">
                <div className="number">
                  <span>2</span>
                </div>
                <div className="content">
                  <h2 className="text-xl md:text-2xl">Click the get this movie button</h2>
                </div>
              </li>
              <li className="step">
                <div className="number">
                  <span>3</span>
                </div>
                <div className="content">
                  <h2 className="text-xl md:text-2xl" >Select any link among the number
                    of links provided for you</h2>

                </div>
              </li>
            </ul>
          </div>

        </section>

        <section className="flex min-h-[90vh] justify-center items-center md:px-20 ">
          <Ticker onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} duration={duration}>
            {
              selected.map((val: MoviesProps, i: any) => <div key={i} className='w-[70vw] md:w-[30vw] mx-3 h-[50vh] flex justify-center items-center rounded-md'><img src={val.imgSrc} className='w-full h-full  rounded-md' alt={val.title} /></div>)
            }

          </Ticker>
        </section>
      </section>
    </main>
  )
}
