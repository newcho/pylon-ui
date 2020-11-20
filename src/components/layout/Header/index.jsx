import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./styles.scss";
import cx from "classnames";

const Header = ({ location }) => {
  const [menuName, setMenuName] = useState("home");

  useEffect(() => {
    if (location.pathname.indexOf("home") > 0) setMenuName("home");
    if (location.pathname.indexOf("about-pylon") > 0)
      setMenuName("about-pylon");
    if (location.pathname.indexOf("fvault") > 0) setMenuName("fvault");
    if (location.pathname.indexOf("yvault") > 0) setMenuName("yvault");
    if (location.pathname.indexOf("pvault") > 0)
      setMenuName("pvault");
    if (location.pathname.indexOf("partners") > 0) setMenuName("partners");
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Link className="header__logo" to="/home">
            <img
              className="header__logo__img"
              src={require("../../../assets/images/pylon.png")}
              alt="pylon - new"
            />
          </Link>
          <nav className="header__nav">
            <ul>
              <li className={cx("menu-link", { active: menuName === "home" })}>
                <Link to="/home">HOME</Link>
              </li>
              <li
                className={cx("menu-link", {
                  active: menuName === "about-pylon",
                })}
              >
                <Link to="/about-pylon">ABOUT PYLON</Link>
              </li>
              {/* <li className={cx("menu-link", { active: menuName === "yvault" })}>
                <Link to="/yvault">YCRV VAULT</Link>
              </li> */}
              <li
                className={cx("menu-link", {
                  active: menuName === "fvault",
                })}
              >
                <Link to="/fvault">FDI VAULT</Link>
              </li>
              <li
                className={cx("menu-link", {
                  active: menuName === "pvault",
                })}
              >
                <Link to="/pvault">PYLON GPU VAULT</Link>
              </li>
              <li
                className={cx("menu-link", { active: menuName === "partners" })}
              >
                <Link to="/partners">PARTNERS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default withRouter(Header);
