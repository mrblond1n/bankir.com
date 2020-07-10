import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Grid, Typography, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const INITIAL_STATE = []

export default function Balance({ events = INITIAL_STATE }) {
  const [defaultFinances, setDefaultFinances] = useState([]);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [balanceDay, setBalanceDay] = useState(0);
  const [balance, setBalance] = useState(0);
  const [capital, setCapital] = useState(0);

  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(true);

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  const leftDays = 33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate() - new Date().getDate() || 1;

  const filter = useSelector(state => state.filter.activeFilter)

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


  const classes = useStyles();


  return (
    // <div className='card'>
    //   {filter.name === 'month' && <div>Capital: {capital} ₽</div>}
    //   <div>Расходы: {totalOutcome} ₽</div>
    //   <div>Доходы: {totalIncome} ₽</div>
    //   {filter.name === 'month' && <div>Баланс на месяц: {balance} ₽</div>}
    //   {filter.name === 'month' && <div>Баланс на день: {balanceDay} ₽</div>}
    // </div>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" className={classes.title}>
        Text only
    </Typography>
      <div className={classes.demo}>
        <List dense={dense}>
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>,
          )}
        </List>
      </div>
    </Grid>
  )
}
