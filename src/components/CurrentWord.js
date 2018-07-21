import * as React from 'react'

export default function CurrentWord(props){
  console.log(props.currentWordState)
  return (
    <div>
      <p>
        {props.currentWordState.split('').map((x, index)=>{
        console.log(x);
          return <span key = {index}> {x} </span>
      })}
      </p>
    </div>
  )
}