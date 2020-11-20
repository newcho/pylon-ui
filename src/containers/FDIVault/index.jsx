import React from "react";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import Farm from "../../components/farm";

import { FDI_VAULT } from "../../helpers/fdiVault/constants";

import "./styles.scss";

export default function FDIVault() {
  return (
    <>
      <div className="root fdi-valut-container">
        <div className="content-2">
          <TextBlock title="FDI VAULT" color="orange">
            <p>
              Foreign Direct Investments Vaults allow you to own a GPU mining
              {` `}
              <br />
              farm with a click of a button. This allows anyone from anywhere in
              {` `}
              <br />
              the world the opportunity to take advantage of investments that
              {` `}
              <br />
              only large hedge funds and investors can access. PYLON gives{` `}
              <br />
              access to GPU mining hardware investment backed by the largest USA
              {` `}
              <br />
              GPU mine. KYC free solution to have a real world asset backed by
              {` `}
              <br />
              land, real estate and computer hardware.{` `}
            </p>
            <p>Our process is as follows for the FDI VAULT:</p>
            <p>
              1. Deposit in Vault. <br />
              2. Funds Deployed. <br />
              3. Mine built for Vault.
              <br />
              4. Dividends to user based on % of their share in vault.{" "}
            </p>
            <p>
              Dividends paid within 7 days or less after user deposits in vault.
            </p>
            <p>
              DISCLAIMER: Any principle contributed to this vault will go
              directly{` `}
              <br />
              to the funding of GPU mines and will not available to be
              withdrawn.
            </p>
          </TextBlock>
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
          {/* <div className="section connect-wallet">
            <Button color="cyan" caption="CONNECT WALLET" size="lg" />
          </div> */}
        </div>
        <div className="content-1">
          <Farm data={FDI_VAULT} type="FDI" />
        </div>
      </div>
    </>
  );
}
