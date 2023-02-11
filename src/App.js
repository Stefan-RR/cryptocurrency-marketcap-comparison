import { useState, useEffect} from 'react';
import Coin from './components/Coin';
import './App.css';

function App() {

  const [coinOptions, setCoinOptions] = useState([]);


  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => res.json())
    .then(data => {
      setCoinOptions([data.name, ...Object.keys(data.market_cap)])
      console.log(setCoinOptions)
    })
  }, [])

  return (
    <div className='App'>
      <span className='content'>
        <Coin
          coinOptions={coinOptions}
        />
        <Coin />
        <Coin
          coinOptions={coinOptions}
        />
        <Coin />
      </span>
    </div>
  );
}

export default App;
