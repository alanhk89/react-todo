import React, { Component } from 'react';
import { TodoWrapper, ImageLogo } from './index.style';
import logo from './assets/logo.svg'

export default class Todo extends Component {
  constructor(){
    super()

    this.state = {
      price:7000000,
      payment:4,
      rate:2.15,
      year:30
    }

    this.setPrice = this.setPrice.bind(this)
    this.setPayment = this.setPayment.bind(this)
    this.setRate = this.setRate.bind(this)
    this.setYear = this.setYear.bind(this)
  }

  setPrice(e){
    this.setState({ price:e.target.value })
  }

  setPayment(e){
    this.setState({ payment:e.target.value })
  }
  setRate(e){
    this.setState({ rate:e.target.value })
  }
  setYear(e){
    this.setState({ year:e.target.value })
  }

  calMonthlyPayment(price, downPayment, interestRate, termYear) {
    const downPaymentMoneyAmount = price * downPayment;
    const loan = price - downPaymentMoneyAmount;
    const monthlyPaymentCalculate =
      loan *
      interestRate /
      12 /
      (1 - Math.pow(1 + interestRate / 12, -termYear * 12));
    return Math.round(monthlyPaymentCalculate);
  }

  calLoan(price,payment){
    const loanCalculate = price * (1-(payment/100))
    return Math.round(loanCalculate);
  }

  render() {
    const { price, payment, rate, year } = this.state

    //loan = pp * (1-.4)/100
    return <TodoWrapper>
      <div className="ctable">
        <div className="ctable-cell">
          <div className="main-body">
                <div className="header-wrapper">
                    <div className="header-col">
                    Mortgage calculator
                    </div>
                    <div className="header-col logo">
                      <img src={logo} height="20" />
                    </div>
                </div>
                <div className="cal-body">
                    <div className="body-col">
                      HK$ {this.calMonthlyPayment(price, payment, rate, year)} p/m
                      <br/>
                      Loan amount: HK$ {this.calLoan(price,payment)}
                    </div>
                    <div className="body-col">
                        <div className="body-col">
                          <label>Property price(HK$)</label>
                          <input onChange={this.setPrice} value={price}/>
                        </div>
                        <div className="body-col">
                          <label>Down payment</label>
                          <input onChange={this.setPayment} value={payment}/>
                        </div>
                        <div className="body-col">
                          <label>Interest rate(%)</label>
                          <input onChange={this.setRate} value={rate}/>
                        </div>
                        <div className="body-col">
                          <label>Loan term (Years)</label>
                          <input onChange={this.setYear} value={year}/>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </TodoWrapper>;
  }
}
