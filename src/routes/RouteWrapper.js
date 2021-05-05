import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../config/layout';

export default function RouteWrapper({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout showHeader={rest.showHeader}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
