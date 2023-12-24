import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Power3 } from 'gsap';
import { useState, useEffect, useRef } from 'react';

export type ClockProps = {
    isDayTime: boolean
};

function Clock({ isDayTime }: ClockProps) {
    const [date, setDate] = useState(new Date());
    const clock: any = useRef();
    const symbol: any = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => clearInterval(intervalId);
    }, [])

    useGSAP(() => {
        gsap.from(clock.current, { opacity: 0, ease: Power3.easeIn });
        gsap.from(symbol.current, { opacity: 0, ease: Power3.easeInOut, y: -10, delay: 0.7 });
    });

    return (
        <div className='Clock'>
            <div className='Time' ref={clock}>
                {date.toLocaleString([], { timeStyle: 'short' })}
            </div>
            {' '}
            <div className='Symbol' ref={symbol}>
                {isDayTime ? "☼" : "☾"}
            </div>
        </div>
    );
}

export default Clock;