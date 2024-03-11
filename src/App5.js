// sqr function
import React from 'react'
import Sqr from './Sqr'

export default function App5() {
    const sqrFunction = (num)=> {
        return num * num 
    }
  return  <div> <Sqr n={5} f={sqrFunction}/></div>
}
