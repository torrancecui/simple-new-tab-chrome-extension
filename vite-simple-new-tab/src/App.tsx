import './App.css'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Streamgraph from './Streamgraph'

function App() {
  return (
    <>
      <div className='App'>
        <div className='Graph'>
          <ParentSize>{({ width, height }) => <Streamgraph width={width} height={height} />}</ParentSize>
        </div>
      </div>
    </>
  )
}

export default App
