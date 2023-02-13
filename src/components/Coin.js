import React from 'react'

function Coin({ selectedCoin, onChangeCoin, coinOptions }) {
  return (
    <div>
        <select className='selected' value={selectedCoin} onChange={onChangeCoin}>
          <option value=''>Select a Cryptocurrency</option>
          {coinOptions}
        </select>
    </div>
  )
}

export default Coin