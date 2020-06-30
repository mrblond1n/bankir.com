import React, { useState, useEffect } from 'react'


export default function Balance({ events }) {
  const [defaultFinances, setDefaultFinances] = useState([]);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [balanceDay, setBalanceDay] = useState(0);
  const [balance, setBalance] = useState(0);
  const [capital, setCapital] = useState(0);

  const leftDays = 33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate() - new Date().getDate() || 1;

  useEffect(() => {
    setCapital(30000);
    setDefaultFinances(events);

    let outcome = 0,
      income = 0;
    defaultFinances.forEach(fin => {
      fin.method === 'outcome' ? outcome += +fin.sum : income += +fin.sum;
    });

    setTotalOutcome(fixedNum(outcome));
    setTotalIncome(fixedNum(income));
    setBalance(fixedNum(capital - totalOutcome));
    setBalanceDay(fixedNum((capital - totalOutcome) / leftDays));

  }, [defaultFinances, capital, totalOutcome, events, leftDays]);

  const fixedNum = num => {
    try {
      return num.toFixed(2)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='card'>
      <div>Capital: {capital}</div>
      <div>Расходы: {totalOutcome}</div>
      <div>Доходы: {totalIncome}</div>
      <div>Баланс на месяц: {balance}</div>
      <div>Баланс на день: {balanceDay}</div>
    </div>
  )
}
