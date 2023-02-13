import { useState, useEffect} from 'react';
import Coin from './components/Coin';
import './App.css';

function App() {

  const [fromCoin, setFromCoin] = useState();
  const [toCoin, setToCoin] = useState();
  const [fromCoinList, setFromCoinList] = useState([]);
  const [toCoinList, setToCoinList] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => res.json())
    .then(data => {
     setFromCoinList(data.map(data => <option key={data.id} value={data.market_cap}>{data.name}</option>))
     setToCoinList(data.map(data => <option key={data.id} value={data.circulating_supply}>{data.name}</option>))
    })
  }, [])
  
  var mCap = parseInt(fromCoin)
  var supply = parseInt(toCoin)
  var newPrice = mCap/supply
  const rounded = () => {
      if (newPrice >=0.001) {
        return <p>{newPrice.toFixed(2)}</p>
      } else if (newPrice < 0.001) {
        return <p>{newPrice.toPrecision(2)}</p>
      } else {
        return <p></p>
      }
  }
  return (
    <div className='App'>
      <header>
        <h1>Cryptocurrency Market-Cap Comparison</h1>
        <p>Powered by CoinGecko API</p>
      </header>
      <span className='content'>
        <p>The price of one
        <Coin
          selectedCoin={toCoin}
          onChangeCoin={e => setToCoin(e.target.value)}
          coinOptions={toCoinList}
        />
        with the market cap of
        <Coin
          selectedCoin={fromCoin}
          onChangeCoin={e => setFromCoin(e.target.value)}
          coinOptions={fromCoinList}
        />
        would be ${rounded()}</p>
      </span>
    </div>
  );
}

export default App;
