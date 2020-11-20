import React from "react";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import Farm from "../../components/farm";

import "./styles.scss";

import { PYLON_VAULT } from "../../helpers/pylonVault/constants";

export default function PYLONVault() {
  return (
    <>
      <div className="root ycrv-valut-container">
        <div className="content-2">
          <TextBlock title="PYLON GPU VAULT" color="orange">
            <p>
              The promise. The journey. The company you take with you. The first
              {` `}
              <br />
              real world Tether. This is what defines PYLON. PYLON GPU VAULT is{" "}
              {` `}
              <br />
              now here, seeded with $1,000,000 raised to dividend to users.{` `}
              <br />
              Rewards begin immediately upon stake and APY is updated every 7
              {` `}
              <br />
              days at ETH current price along with current hashrate{` `}
              <br />
              difficulties. You may choose to stake PYLON only as well as enjoy
              {` `}
              <br />
              fees generated with trades by staking the PYLON/ETH Uniswap LP
              {` `}
              <br />
              token in addition to your mining income. Long Live the Reaper!
              {` `}
            </p>
          </TextBlock>
          {/* <div className="section connect-wallet">
            <Button color="cyan" caption="CONNECT WALLET" size="lg" />
          </div> */}
          {/* <div className="section mine-open">
            <h3>JOIN PYLON VAULT TODAY</h3>
            <span>10 Dec (Sunday) 2020, 15 AM</span>
            <div className="date">
              <div className="item">
                <span className="number">19</span>
                <span className="desc">DAYS</span>
              </div>
              <div className="divider">{` `}</div>
              <div className="item">
                <span className="number">23</span>
                <span className="desc">HRS</span>
              </div>
              <div className="divider">{` `}</div>
              <div className="item">
                <span className="number">33</span>
                <span className="desc">MIN</span>
              </div>
              <div className="divider">{` `}</div>
              <div className="item">
                <span className="number">11</span>
                <span className="desc">SEC</span>
              </div>
            </div>
            <Button color="cyan" caption="CONNECT WALLET" size="lg" />
          </div> */}
        </div>
        <div className="content-1">
          <Farm data={PYLON_VAULT} type="PYLON" />
        </div>
      </div>
    </>
  );
}
