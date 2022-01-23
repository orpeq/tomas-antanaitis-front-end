import React from 'react';
import './icons.scss';

const inlineBlock = {
  display: 'inline-block',
};
const displayNone = {
  display: 'none',
};

export const currencyIcons = [
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/eur.png?raw=true)`,
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/usd.png?raw=true)`,
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/gbp.png?raw=true)`,
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/jpy.png?raw=true)`,
  `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/rub.png?raw=true)`,
];

export const RealCurrency = ({ handlePay, toggle, toggleFunc }) => {
  return (
    <ul
      className="currency-icons"
      style={toggle ? inlineBlock : displayNone}
      onMouseLeave={toggleFunc}>
      <li className="list">
        <button
          onClick={handlePay}
          name="EUR"
          style={{ backgroundImage: currencyIcons[0] }}
          className="link-drop">
          EUR
        </button>
      </li>
      <li className="list">
        <button
          onClick={handlePay}
          name="USD"
          style={{ backgroundImage: currencyIcons[1] }}
          className="link-drop">
          USD
        </button>
      </li>
      <li className="list">
        <button
          onClick={handlePay}
          name="GBP"
          style={{ backgroundImage: currencyIcons[2] }}
          className="link-drop">
          GBP
        </button>
      </li>
      <li className="list">
        <button
          onClick={handlePay}
          name="JPY"
          style={{ backgroundImage: currencyIcons[3] }}
          className="link-drop">
          JPY
        </button>
      </li>
      <li className="list">
        <button
          onClick={handlePay}
          name="RUB"
          style={{ backgroundImage: currencyIcons[4] }}
          className="link-drop">
          RUB
        </button>
      </li>
    </ul>
  );
};
