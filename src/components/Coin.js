import React from 'react'

function Coin({ selectedCoin, onChangeCoin, coinOptions }) {
  return (
    <div>
        <select className='selected' value={selectedCoin} onChange={onChangeCoin}>
          {coinOptions}
        </select>
    </div>
  )
}

export default Coin