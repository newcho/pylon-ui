import React from "react";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import Farm from "../../components/farm";

import { FDI_VAULT } from "../../helpers/fdiVault/constants";

import "./styles.scss";

export default function SeeMine() {
  return (
    <>
      <div className="root see-mine-container">
        <div className="content">
          <div className="section">
            <p>
              <img src={require("../../assets/images/see-mine.png")} width="100%" alt=""/>
              <a
                href="https://ethereum.miningpoolhub.com/index.php?page=statistics&action=pool"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ethereum.miningpoolhub.com/index.php?page=statistics&action=pool
              </a>
            </p>
            <p>
              Above is the pool we are using for pylon mining. you can see the
              pylon finance name on list to show hash rate.{" "}
            </p>
            <p>
              <strong>0x37D50885b44500A2eAcaB7C93dD349590600f05f</strong>
            </p>
            <p>
              Will be the address that mine auto pays out to and which is
              account currently used for buy backs. so account used for buybacks
              will receive eth directly from mine.{" "}
            </p>
            <p>
              The flat cost of electricity is 493 per day. we will round to make
              it a simple flat 500 per day and this is for electrical and
              cooling
            </p>
            <p>
              All other fees are absorbed for free.{` `}which are: {` `}
              <br /> 1. insurance {` `}
              <br /> 2. internet {` `}
              <br /> 3. maintenance of machines {` `}
              <br /> 4. warranty claims and swaps {` `}
              <br /> 5. emergency coverage {` `}
              <br /> 6. day to day management of hardware.{" "}
            </p>
            <p>
              So this is hash rate stream and mine address mine will payout to
              as well as description of fees.{" "}
            </p>
            <p>
              The electrical costs will be taken daily or weekly based on demand
              or time of month.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
