import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import App from './App';

import styles from './HomePage.scss';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <App styleName="container" />
  </Fragment>
);

export default CSSModules(HomePage, styles);
