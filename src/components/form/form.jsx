import React from 'react';
import '../../styles/index.scss';
import { Link } from 'react-router-dom';

const Form = ({
  payInput,
  buyInput,
  handleInputPay,
  handleInputBuy,
  pay,
  buy,
  paymentMethods,
  payment,
  handlePayment,
  onToggle,
  onCryptoToggle,
  onFocus,
}) => {
  return (
    <div className="page__wrapper">
      <div className="page__background"></div>
      <div className="page__container container">
        <div className="page__row row">
          <h1 className="page__header--text col-lg-6 col-12">
            <span className="page__header--span">Buy Bitcoin,</span> Ethereum,
            Litecoin and other crypto{' '}
            <span className="page__header--span">online</span>
          </h1>
          <div className="page__wrapper--back col-lg-6 col-12">
            <form className="form">
              <div className="form__row">
                <label>Pay</label>
                <input
                  name="inputPay"
                  id="inputPay"
                  type="number"
                  onChange={handleInputPay}
                  value={payInput}
                />
                <div className="line"></div>
                <button
                  type="reset"
                  style={{
                    backgroundImage: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/${pay.toLowerCase()}.png?raw=true)`,
                  }}
                  onClick={onToggle}>
                  {pay}
                </button>
              </div>
              <div className="form__row">
                <label>Buy</label>
                <input
                  type="number"
                  name="inputBuy"
                  id="inputBuy"
                  onChange={handleInputBuy}
                  value={buyInput}
                  onFocus={onFocus}
                  onBlur={onFocus}
                />
                <div className="line"></div>
                <button
                  type="reset"
                  style={{
                    backgroundImage: `url(https://github.com/spothq/cryptocurrency-icons/blob/master/32/icon/${buy.toLowerCase()}.png?raw=true)`,
                  }}
                  onClick={onCryptoToggle}>
                  {buy}
                </button>
              </div>
              <p className="form__payment-method">Payment method </p>
              <div className="form__row">
                <img
                  src="https://www.spirit-stone-records.com/media/da/5a/e1/1629908453/sepa.png"
                  alt="logo"
                  className="form__payment-img"
                />
                <select
                  name="payment"
                  id="form__payment"
                  onChange={handlePayment}
                  value={payment}>
                  {paymentMethods.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <Link className="form__btn-buy" to="/sign-up">
                Buy {buy}
              </Link>
            </form>
          </div>
          <p className="page__paragraph text col-lg-6 col-12">
            Why bother going through complicated exchanges? Buy cryptocurrency
            with top payment methods like SEPA bank transfer, Credit and Debit
            Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
            Ethereum or any other popular crypto directly to your personal
            wallet without making any initial deposits. It's as easy as it gets!
            <br />
            <br />
            <Link to="sign-up" className="form__start-now" rel="noreferrer">
              Start now {'>'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
