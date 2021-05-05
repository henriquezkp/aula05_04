import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  const incomeIn = useSelector((state) => state.incomeIn);
  const incomeOut = useSelector((state) => state.incomeOut);

  const [saldo, setSaldo] = useState(0);
  useEffect(() => {
    let totalIn = incomeIn.reduce((calculado, atual) => calculado + parseFloat(atual.value), 0);
    let totalOut = incomeOut.reduce((calculado, atual) => calculado + parseFloat(atual.value), 0);

    if (!totalIn) {
      totalIn = 0;
    }

    if (!totalOut) {
      totalOut = 0;
    }

    setSaldo(totalIn - totalOut);
  }, [incomeIn, incomeOut]);

  /* const saldo = useMemo(() => {
    let totalIn = incomeIn.reduce((calculado, atual) => calculado + parseFloat(atual.value), 0);
    let totalOut = incomeOut.reduce((calculado, atual) => calculado + parseFloat(atual.value), 0);

    if (!totalIn) {
      totalIn = 0;
    }

    if (!totalOut) {
      totalOut = 0;
    }

    return totalIn - totalOut;
  }); */

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Controle de dinheiro
          </Typography>
          <Typography variant="h6">
            Saldo R$
            {' '}
            {saldo}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
