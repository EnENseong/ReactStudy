import './App.css'
import Controller from './compononts/Controller'
import Viewer from './compononts/Viewer'
import { useState } from 'react'

function App() {
  const [count, setCount]=useState(0)
  const onClickButton = (value)=>{
    setCount(count + value);
  };
  
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton} setCount={setCount}/>
      </section>
    </div>
  )
}

export default App
