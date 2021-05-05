import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DataTable from '../../components/data-table';

export default function Home() {
  const history = useHistory();

  const incomeIn = useSelector((state) => state.incomeIn);
  const incomeOut = useSelector((state) => state.incomeOut);

  const [incomeInLocal, setIncomeInLocal] = useState([]);
  const [incomeOutLocal, setIncomeOutLocal] = useState([]);

  useEffect(() => {
    if (incomeIn) {
      setIncomeInLocal(incomeIn);
    }
  }, [incomeIn]);

  useEffect(() => {
    if (incomeOut) {
      setIncomeOutLocal(incomeOut);
    }
  }, [incomeOut]);

  const handleClick = () => {
    history.push('/register');
  };

  return (
    <Grid item>
      <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
          <DataTable title="Entradas" data={incomeInLocal} />
        </Grid>

        <Grid item xs={12} md={6}>
          <DataTable title="Saídas" data={incomeOutLocal} />
        </Grid>
      </Grid>

      <Fab color="primary" aria-label="add" onClick={() => handleClick()}>
        <AddIcon />
      </Fab>
    </Grid>
  );
}
