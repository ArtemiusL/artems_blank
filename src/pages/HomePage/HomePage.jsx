import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import styles from '_styles/style.scss';
import BlankApp from '_components/BlankApp';

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <BlankApp styleName="container" />
  </Fragment>
);

export default CSSModules(HomePage, styles);
