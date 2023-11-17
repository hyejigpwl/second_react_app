import { useState, useEffect } from "react";

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selCoin, setSelCoin] = useState([]);

  // 한 번만 실행되게끔
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    });
  },[]);

  const onInputChange = (event) => {
    setMoney(event.target.value);
  }

  const onSelectChange = (event) => {
    setSelCoin(event.target.value);
  }

  const selectedIndex = coins.findIndex(coin => coin.name === selCoin);

  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (<strong>Loading...</strong>
      ) : (
        <>
          <input type="text" value={money} onChange={onInputChange}></input>USD
          <br/>
          <select onChange={onSelectChange}>
            {coins.map((coin)=><option>{coin.name}</option>)}
          </select>  
          <hr/>
          {
            selectedIndex >= 0 && coins.length > 0 ?
            Math.floor(money/coins[selectedIndex].quotes.USD.price)
            :0
          }
        </> 
      )}
    </div>
  )
};

export default CoinTracker;

/*
1. input의 입력값 받기 -> state로 만들어서 변화값 체크
2. 
*/