import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import RectBlock from "../../components/common/RectBlock";
import Stake from "../../components/farm/Stake";

import "./styles.scss";

export default function YCRVVault() {
  return (
    <>
      <div className="root ycrv-valut-container">
        <div className="content-1">
          <Stake />
          <Stake />
          <Stake />
        </div>
        <div className="content-2">
          <TextBlock title="PYLON VAULT" color="orange">
            <p>
              PYLON VAULT is a cryptocurrency storage and wallet
              <br />
              management system designed to fullfil business
              <br />
              accounts requirements, providing at the same time a <br />
              top notch protection levels to secure your digital assets.
            </p>
            <p>
              Our digital wallet manager and vault provides business
              <br />
              owners and digital asset managers the ideal tool to
              <br />
              manage different wallets, and to perform steamlined <br />
              blockchain transactions in a secure way.
            </p>
          </TextBlock>
          <div className="section mine-open">
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
            {/* <Button color="cyan" caption="CONNECT WALLET" size="lg" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
