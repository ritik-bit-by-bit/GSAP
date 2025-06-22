import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Goto from './components/Goto'
import Gsapfrom from './components/Gsapfrom'
import GsapfromTo from './components/GsapFromTo'
import Gsaptimeline from './components/Gsaptimeline'
import GsapStagger from './components/Gsaptagger'
import GsapScrollTrigger from './components/GsapScrollTrigger'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='min-h-screen min-w-screen flex space-x-5'>
        {/* <div>
        <Goto/>
        </div>
        <div>
        <Gsapfrom/>
        </div> 
        <GsapfromTo/>
        <Gsaptimeline/>
        <GsapStagger/>*/}
        <GsapScrollTrigger/>
    </div>
  )
}

export default App
