import './App.css'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Streamgraph from './Streamgraph'
import Clock from './Clock';
import AnimatedCursor from "react-animated-cursor";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Power3 } from 'gsap';


function App() {

  const streamgraph: any = useRef();

  useGSAP(() => {
    gsap.from(streamgraph.current, { opacity: 0, ease: Power3.easeIn, delay: 0.3 });
  });

  const date = new Date();
  const isDayTime: boolean = (date.getHours() > 6 && date.getHours() < 20);
  const backgroundColor: string = isDayTime ? '#d7e3fc' : '#212130';
  const textColor: string = isDayTime ? '#2b2d42' : '#faf1de';

  return (
    <>
      <div className='App' style={{
        backgroundColor: backgroundColor,
        color: textColor
      }}>
        <AnimatedCursor outerScale={4}></AnimatedCursor>
        <div className='Clock'>
          <Clock isDayTime={isDayTime}></Clock>
        </div>
        <button style={{
          all: 'unset'
        }}>
          <div className='Graph' ref={streamgraph}>
            <ParentSize>{({ width, height }) => <Streamgraph width={width} height={height} backgroundColor={backgroundColor} />}</ParentSize>
          </div>
        </button>
      </div >
    </>
  )
}

export default App
