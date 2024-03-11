
// map function
import React from 'react'

export default function App6() {
    let names = ["jhon","cathy", "mike"]
  return (
    <ul>
    {names.map((e,i)=>(
        <li key={i}>{e}</li>
    ))}
    <ul>
  )
  } 
