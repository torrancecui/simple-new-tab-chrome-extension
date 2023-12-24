import './App.css'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Streamgraph from './Streamgraph'
import Clock from './Clock';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Power3 } from 'gsap';


function App() {

  const clock: any = useRef();
  const streamgraph: any = useRef();

  useGSAP(() => {
    gsap.from(clock.current, { opacity: 0, ease: Power3.easeIn });
    gsap.from(streamgraph.current, { opacity: 0, ease: Power3.easeIn, delay: 0.3 });
  });


  return (
    <>
      <div className='App'>
        <div className='Clock' ref={clock}>
          <Clock></Clock>
        </div>
        <div className='Graph' ref={streamgraph}>
          <ParentSize>{({ width, height }) => <Streamgraph width={width} height={height} />}</ParentSize>
        </div>
      </div>
    </>
  )
}

export default App
