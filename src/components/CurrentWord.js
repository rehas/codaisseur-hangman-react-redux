import * as React from 'react'

export default function CurrentWord(props){
  return (
    <div>
      <p>
        {props.currentWordState.split('').map((x, index)=>{
          return <span key = {index}> {x} </span>
      })}
      </p>
    </div>
  )
}