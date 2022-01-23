import React, { useState, useEffect } from 'react';

import Form from '../components/form/form';
import axios from 'axios';
import { CryptoCurrency } from '../components/partials/crypto-currency';
import { RealCurrency } from '../components/partials/real-currency';
import '../styles/index.scss';

const paymentMethods = [
  'Bank Transfer',
  'Credit/Debit Card',
  'Paypal',
  'Mobile Account',
];

const HomePage = () => {
  const [payCurrency, setPayCurrency] = useState('EUR');
  const [buyCrypto, setBuyCrypto] = useState('BTC');

  const [buyInput, setBuyInput] = useState('');
  const [payInput, setPayInput] = useState('');

  const [results, setResults] = useState(null);
  const [payment, setPayment] = useState(paymentMethods[0]);

  const [currencyToggle, setCurrencyToggle] = useState(false);
  const [cryptoToggle, setCryptoToggle] = useState(false);

  const [rate, setRate] = useState(null);
  const [input, setInput] = useState('');
  const [focus, setFocus] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const response = axios('http://localhost:5000/merchant');
      response.then((el) => setResults(el.data[buyCrypto]));
    };
    fetchData();
  }, [payCurrency, buyCrypto]);

  useEffect(() => {
    if (results === null) return;
    const toArray = Object.entries(results);
    const rate = +toArray
      .filter((coin) => coin[0] === payCurrency)[0]
      .splice(1)[0];
    setRate(rate);
    // eslint-disable-next-line
  }, [results]);

  useEffect(() => {
    setBuyInput(function (prev) {
      setInput(payInput);
      if (rate && payInput * rate === +prev) {
        return prev;
      } else if (rate) {
        return focus
          ? (payInput / rate).toFixed(6) === 0
            ? ''
            : (payInput / rate).toFixed(6)
          : input;
      } else return '';
    });
    // eslint-disable-next-line
  }, [payInput, rate]);

  useEffect(() => {
    setPayInput(function (prev) {
      setInput(buyInput);
      if (rate && buyInput / rate === +prev) {
        return prev;
      } else if (rate) {
        return !focus
          ? (buyInput * rate).toFixed(2) % 1 === 0
            ? (buyInput * rate).toFixed(0)
            : (buyInput * rate).toFixed(2)
          : input;
      } else return '';
    });
    // eslint-disable-next-line
  }, [buyInput]);

  const onToggle = () => {
    if (cryptoToggle) {
      setCryptoToggle(!cryptoToggle);
    }
    setCurrencyToggle(!currencyToggle);
  };

  const onCryptoToggle = () => {
    if (currencyToggle) {
      setCurrencyToggle(!currencyToggle);
    }
    setCryptoToggle(!cryptoToggle);
  };

  const onFocus = () => {
    setFocus(!focus);
  };

  return (
    <>
      <Form
        handleInputPay={({ target }) => setPayInput(target.value)}
        handleInputBuy={({ target }) => setBuyInput(target.value)}
        handlePayment={({ target }) => setPayment(target.value)}
        onToggle={onToggle}
        onCryptoToggle={onCryptoToggle}
        payInput={payInput}
        buyInput={buyInput}
        paymentMethods={paymentMethods}
        payment={payment}
        focusToggle={onFocus}
        pay={payCurrency}
        buy={buyCrypto}
      />
      <CryptoCurrency
        toggleCoin={cryptoToggle}
        toggleCoinFunc={onCryptoToggle}
        handleBuy={({ currentTarget }) => {
          setBuyCrypto(
            currentTarget.getAttribute('name')
              ? currentTarget.getAttribute('name')
              : 'BTC'
          );
        }}
      />
      <RealCurrency
        toggle={currencyToggle}
        toggleFunc={onToggle}
        handlePay={({ currentTarget }) => {
          setPayCurrency(
            currentTarget.getAttribute('name')
              ? currentTarget.getAttribute('name')
              : 'EUR'
          );
        }}
      />
    </>
  );
};

export default HomePage;
