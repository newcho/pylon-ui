import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import FaqBlock from "../../components/common/FaqBlock";
import PathBlock from "../../components/common/PathBlock";

import "./styles.scss";

export default function AboutPYLON() {
  return (
    <>
      <div className="root about-container">
        <div className="content-1">
          <div className="section section-concept">
            <div className="section section-text">
              <TextBlock title="Who We Are?">
                <p>
                  Pylon is a utility token that pays dividends on real world GPU
                  {` `}
                  <br />
                  mining farm in the US. We are a 100% community mined token
                  {` `}
                  <br />
                  with no presale, no premine, and a low cap supply of approx
                  {` `}
                  <br />
                  7700.
                </p>
                <p>
                  Backed by the largest USA mining corp, we are able to give
                  {` `}
                  <br />
                  users the opportunity to own a piece of one of the most{` `}
                  <br />
                  essential resources needed to support the blockchain{` `}
                  <br />
                  ecosystem.
                </p>
              </TextBlock>
            </div>
          </div>
          {/* <div className="section section-concept">
            <div className="section section-pylon-mine">
              <div className="left">
                <h2>Pylon's Latest Mine</h2>
                <p>
                  We are a 100% community mined project with no ICO, presale,{" "}
                  <br />
                  and low cap supply of 8.4k.
                  <br />
                  <br />
                  Mining units can generate 20-50% APY in a bear market and
                  <br />
                  160-250%+ APY in a bull market.
                </p>
              </div>
              <div className="right">
                <div className="section1">Have questions about Us?</div>
                <div className="section2">Find out frequently asked</div>
                <div className="section2">
                  questions <span>Here</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="section section-pylon-value">
            <div className="left">
              <div className="section mine-open">
                <h3>NEW MINE OPENS ON</h3>
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
                <Button color="orange" caption="JOIN NOW" size="lg" />
              </div>
            </div>
            <div className="right">
              <FaqBlock
                className="rect-block pylon-faq-brochure"
                title={`PYLON`}
                title2={`FINANCE`}
                subTitle="DOUNLOAD"
                faq="FAQ"
                content="BROCHURE"
                background="#0540c8"
                mainColor="#fff "
                subColor="#7899de"
                borderColor="#82a1e4"
                width="260"
              />
            </div>
          </div> */}
        </div>

        <div className="content-2">
          <div className="section section-pylon-path">
            <TextBlock title="Pylon's Path" color="orange"></TextBlock>
            <p>Check our recent plans and achievements here</p>
          </div>
          <div className="section section-quarter">
            <PathBlock
              className="path-block high-return"
              title={`2020`}
              title2={`Q3`}
              subTitle="Title here"
              content="A short one sentence conclusion here."
              background="#0540c8"
              backgroundImage="icon-setting"
              quarterTitle="Main goal in this quarter"
              subContentSpace="- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              subContent1="All income generating farms and pools to fill the mining fund rolled out"
              subContent2="Roadmap, FAQ, Learn Pylon, Whitepaper releases"
              subContent3=""
              subContent4=""
              subContent5=""
              subContent6=""
              share="Join Our Community!"
              telegramIcon="telegram"
              twitterIcon="twitter"
              discordIcon="discord"
              mainColor="#fff "
              subColor="#000069"
              padding="10%"
              width="50%"
            />
            <div className="hr"></div>
            <PathBlock
              className="path-block high-return"
              title={`2020`}
              title2={`Q4`}
              subTitle="Title here"
              content="A short one sentence conclusion here."
              background="#00006d"
              backgroundImage="icon-pylon"
              quarterTitle="Main goal in this quarter"
              subContentSpace="- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              subContent1="Pools closed"
              subContent2="Vault collaboration with $Based"
              subContent3="Launch vaults with different allocations to mining fund"
              subContent4="Mining farm construction begins"
              subContent5="Fee farms (TimeMiner, Nori, more TBA"
              subContent6="Initial rewards for GPU mining are distributed"
              share=""
              facebookIcon=""
              googleIcon=""
              twitterIcon=""
              mainColor="#fff "
              subColor="#000069"
              padding="10%"
              width="50%"
            />
            <div className="hr"></div>
          </div>
        </div>
        <div className="content-3">
          <div className="section section-quarter">
            <PathBlock
              className="path-block high-return"
              title={`2021`}
              title2={`Q1`}
              subTitle="Title here"
              content="A short one sentence conclusion here."
              background="#ff8200"
              backgroundImage="icon-gold"
              quarterTitle="Main goal in this quarter"
              subContentSpace="- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              subContent1="Scale real world mining operation to match current available resources in vault"
              subContent2="Source, develop and expand income streams to fund projects by means of NFTs, farming, or other viable income generating sources."
              subContent3="Scout and deploy a community agreed upon governance model that distributes power evenly and fairly among Pylon's community"
              subContent4=""
              subContent5=""
              subContent6=""
              share=""
              facebookIcon=""
              googleIcon=""
              twitterIcon=""
              mainColor="#fff "
              subColor="#000069"
              padding="10%"
              width="50%"
            />
            <div className="hr"></div>
            <PathBlock
              className="path-block high-return"
              title={`2021`}
              title2={`Q2`}
              subTitle="Title here"
              content="A short one sentence conclusion here."
              background="#0541c8"
              backgroundImage="icon-computer"
              quarterTitle="Main goal in this quarter"
              subContentSpace="- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              subContent1="TBA"
              subContent2=""
              subContent3=""
              subContent4=""
              subContent5=""
              subContent6=""
              share=""
              facebookIcon=""
              googleIcon=""
              twitterIcon=""
              mainColor="#fff "
              subColor="#000069"
              padding="10%"
              width="50%"
            />
          </div>
          <div className="quarter-footer"></div>
        </div>
      </div>
    </>
  );
}
