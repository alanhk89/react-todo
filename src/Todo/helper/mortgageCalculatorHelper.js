export default (price, downPayment, interestRate, termYear) => {
  const downPaymentMoneyAmount = price * downPayment;
  const loan = price - downPaymentMoneyAmount;
  const monthlyPaymentCalculate =
    loan *
    interestRate /
    12 /
    (1 - Math.pow(1 + interestRate / 12, -termYear * 12));
  return Math.round(monthlyPaymentCalculate);
};
