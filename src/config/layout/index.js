import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Header from '../../components/header';
import Footer from '../../components/footer';

import useStyles from './styles';

export default function Layout({ children, showHeader }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {showHeader && (
        <Grid item xs={12} container className={classes.header}>
          <Header />
        </Grid>
      )}
      <Grid item xs={12} container>
        <Container>{children}</Container>
      </Grid>

      <Grid item xs={12} container alignItems="flex-end">
        <Footer />
      </Grid>
    </Grid>
  );
}
