import React from 'react'

function Coin({ coinOptions }) {
  return (
    <div>
        <select id='selected'>
          {coinOptions}
        </select>
    </div>
  )
}

export default Coin