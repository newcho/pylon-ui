import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./containers/Home";
import AboutPYLON from "./containers/AboutPYLON";
import Partners from "./containers/Partners";
import YCRVVault from "./containers/YCRVVault";
import PYLONVault from "./containers/PYLONVault";
import FDIVault from "./containers/FDIVault";
import FAQ from "./containers/FAQ";
import SeeMine from "./containers/SeeMine";

const PublicRoutes = ({ match }) => {
  // console.log('ddd', match.url);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`${match.url}`} component={Home} />
        <Route exact path={`${match.url}home`} component={Home} />
        <Route exact path={`${match.url}about-pylon`} component={AboutPYLON} />
        <Route exact path={`${match.url}yvault`} component={YCRVVault} />
        <Route exact path={`${match.url}fvault`} component={FDIVault} />
        <Route exact path={`${match.url}pvault`} component={PYLONVault} />
        <Route exact path={`${match.url}partners`} component={Partners} />
        <Route exact path={`${match.url}faq`} component={FAQ} />
        <Route exact path={`${match.url}see-mine`} component={SeeMine} />
      </Switch>
      <Footer />
    </>
  );
};

export default PublicRoutes;
