import React from 'react';

import './icons.scss';

const displayNone = {
  display: 'none',
};
const inlineBlock = {
  display: 'inline-block',
};

const cryptoIcons = [
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/btc.png?raw=true)`,
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eth.png?raw=true)`,
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/bnb.png?raw=true)`,
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/usdt.png?raw=true)`,
];

export const CryptoCurrency = ({ handleBuy, toggleCoin, toggleCoinFunc }) => {
  return (
    <ul
      className="crypto-icons"
      style={toggleCoin ? inlineBlock : displayNone}
      onMouseLeave={toggleCoinFunc}>
      <li className="list">
        <button
          name="BTC"
          onClick={handleBuy}
          style={{ backgroundImage: cryptoIcons[0] }}
          className="link-drop">
          Bitcoin (BTC)
        </button>
      </li>
      <li className="list">
        <button
          name="ETH"
          onClick={handleBuy}
          style={{ backgroundImage: cryptoIcons[1] }}
          className="link-drop">
          Ethereum (ETH)
        </button>
      </li>
      <li className="list">
        <button
          name="BNB"
          onClick={handleBuy}
          style={{ backgroundImage: cryptoIcons[2] }}
          className="link-drop">
          Binance Coin (BNB)
        </button>
      </li>
      <li className="list">
        <button
          name="USDT"
          onClick={handleBuy}
          style={{ backgroundImage: cryptoIcons[3] }}
          className="link-drop">
          Tether (USDT)
        </button>
      </li>
    </ul>
  );
};
