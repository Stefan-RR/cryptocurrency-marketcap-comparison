import { useState, useEffect} from 'react';
import Coin from './components/Coin';
import './App.css';

function App() {

  const [coinList, setCoinList] = useState([]);


  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => res.json())
    .then(data => {
     setCoinList(data.map(data => <option value={data.id}>{data.name}</option>))
    })
  }, [])

  return (
    <div className='App'>
      <span className='content'>
        <Coin
          coinOptions={coinList}
        />
         <Coin
          coinOptions={coinList}
        />
        
      </span>
    </div>
  );
}

export default App;
