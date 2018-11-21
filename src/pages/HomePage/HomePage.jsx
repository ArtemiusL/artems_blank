import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import BlankApp from '_components/BlankApp';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <BlankApp />
  </Fragment>
);


export default HomePage;
