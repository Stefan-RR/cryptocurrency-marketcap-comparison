import React from 'react'

function Coin({ selectedCoin, onChangeCoin }) {
  return (
    <div>
        <input type='text' className='coin'/>
        <select id='selected' value={selectedCoin} onChange={onChangeCoin}>

        </select>
    </div>
  )
}

export default Coin