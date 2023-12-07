import { AnimationPlaybackControls, useAnimate, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { AnimationTickerProps } from '../../Types';

let directionLeft = -1;





export default function Ticker({ children, duration = 25, onMouseOver, onMouseLeave }: AnimationTickerProps) {
    let tickerRef = useRef<HTMLDivElement>(null!)
    let contentWidth = 0;
    const [scope, animate] = useAnimate()
    let [numberofDupes, setNumberofDupes] = useState(1)
    let [tickerContentWidth, setTickerContentWidth] = useState(0)
    let [animationControls, setAnimationControls] = useState<AnimationPlaybackControls | undefined>(undefined)
    const isInView = useInView(scope)



    useEffect(() => {
        for (let index = 0; index < children.length; index++) {
            const element = document.querySelector('[data-translate=each]')?.clientWidth
            contentWidth += element;

        }
        setTickerContentWidth(contentWidth)
    })


    useEffect(() => {
        if (tickerRef.current && tickerContentWidth) {
            setNumberofDupes((Math.max(Math.ceil(2 * tickerRef.current.clientWidth / tickerContentWidth), 1)))
        }

    }, [numberofDupes, tickerRef, tickerContentWidth])


    useEffect(() => {
        if (isInView && !animationControls) {
            
            const controls = animate(scope.current, { x: tickerContentWidth ? tickerContentWidth * directionLeft : 0 }, { ease: 'linear', duration, repeat: Infinity });
            console.log(controls.duration,'check')
            controls.play()
            setAnimationControls(controls)
        }
    }, [isInView, animationControls, tickerContentWidth, animate, scope, duration])


    useEffect(() => {
        if (animationControls) {
            if (!isInView) {
                animationControls.pause()
            } else {
                animationControls.play()
            }
        }
    }, [animationControls, isInView])




    
    return (
        <div ref={tickerRef} className='flex gap-3 overflow-hidden'>
            <div ref={scope} onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave} className="flex " >
                {children.map((item, i) => <div data-translate='each' key={i}>{item}</div>)}
                {[...Array(numberofDupes)].map((_) => children.map((val, i) => <div key={i}>{val}</div>))}
            </div>
        </div>
    )
}
