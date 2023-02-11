import React from 'react'

function Coin({ coinOptions }) {
  return (
    <div>
        <select className='selected'>
          {coinOptions}
        </select>
    </div>
  )
}

export default Coin