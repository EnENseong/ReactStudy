import './App.css'
import CurrenyInput from './compononts/CurrenyInput'
import { useState } from 'react'



function App() {
  const [state, setState]= useState({
    KRW: 0,
    USD: 0,
    }
  );

  const exchange= 1300;
  const onChange=(curreny, value)=>{
    console.log({curreny, value});
    if(curreny==="KRW"){
      setState({
        KRW : value,
        USD : value / exchange,
      })
    }else{
      setState({
        KRW : value * exchange,
        USD : value,
      })
    }
  }

  return (
    <>
    <h1>환율 변환기 (KRW-USD)</h1>
    <CurrenyInput
    curreny={"KRW"}
    value={state.KRW}
    onChange={onChange}
    />
    <CurrenyInput
    curreny={"USD"}
    value={state.USD}
    onChange={onChange}
    />
    </>
  )
}

export default App
