import React from 'react'
import Key from './Key';

function Keyboard() {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className= "keyboard">
      <div className= "line1">
        {row1.map((key) => {
          return <Key keyValue= {key}/>;
        })}
      </div>
      <div className= "line2">
      {row2.map((key) => {
          return <Key keyValue= {key}/>;
        })}
      </div>
      <div className= "line3">
        <Key keyValue = "ENTER" bigKey></Key>
      {row3.map((key) => {
          return <Key keyValue= {key}/>;
        })}
        <Key keyValue = "DELETE" bigKey></Key>
      </div>
    </div>

  )
}

export default Keyboard