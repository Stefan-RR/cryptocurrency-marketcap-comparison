import React from 'react'

function Coin({ selectedCoin, onChangeCoin, coinOptions }) {
  return (
    <div>
        <select id='selected' value={selectedCoin} onChange={onChangeCoin}>
          {coinOptions.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
    </div>
  )
}

export default Coin