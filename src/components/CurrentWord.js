import * as React from 'react'

export default function CurrentWord(props){
  return (
    <div className="current-word-container">
      <p>
        {props.currentWordState.split('').map((x, index)=>{
          return <span className="current-word" key = {index}> {x} </span>
      })}
      </p>
    </div>
  )
}