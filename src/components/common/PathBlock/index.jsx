import React from "react";

import "./styles.scss";
import cx from "classnames";

export default function (props) {
  const {
    className,
    title,
    title2,
    subTitle,
    content,
    background,
    backgroundImage,
    quarterTitle,
    subContentSpace,
    subContent1,
    subContent2,
    subContent3,
    subContent4,
    subContent5,
    subContent6,
    share,
    telegramIcon,
    twitterIcon,
    discordIcon,
    mainColor,
    subColor,
    padding,
    width,
  } = props;

  const partStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const bgStyle = {
    background: background,
    width: `50%`,
    height: 65,
  };

  const socialStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 40,
  };

  const shareStyle = {
    color: mainColor,
    paddingRight: 20,
  };

  const mainStyle = {
    background: background,
    paddingLeft: `${padding}`,
  };
  const mainQuarterStyle = {
    background: mainColor,
  };

  const mainQuarterText = {
    paddingLeft: padding,
    paddingBottom: padding,
    color: subColor,
  };

  const subContentStyle = {
    marginTop: 25,
  };

  const quarterIcon = {
    marginRight: 5,
  };

  return (
    <div className={cx(className, "pathblock-container")}>
      <div className="header-footer" style={partStyle}>
        <div className="header-footer" style={bgStyle}></div>
        {share !== "" && (
          <div className="header-footer" style={socialStyle}>
            <span style={shareStyle}>{share}</span>
            {telegramIcon !== "" && (
              <a
                href="https://t.me/pylonfinance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={quarterIcon}
                  src={require(`../../../assets/images/${telegramIcon}.png`)}
                  alt=""
                  width="40"
                />
              </a>
            )}
            {twitterIcon !== "" && (
              <a
                href="https://twitter.com/Pylonfinance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={quarterIcon}
                  src={require(`../../../assets/images/${twitterIcon}.png`)}
                  alt=""
                  width="40"
                />
              </a>
            )}
            {discordIcon !== "" && (
              <a
                href="https://discord.gg/m5zSFsA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={quarterIcon}
                  src={require(`../../../assets/images/${discordIcon}.png`)}
                  alt=""
                  width="40"
                />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="quarter-style">
        <div className="main-style" style={mainStyle}>
          <span className="header-text">{title}</span>
          <span className="sub-header">{title2}</span>
          <span className="divider"></span>
          {/* <span className="sub-title">{subTitle}</span>
          <span className="content">{content}</span> */}
        </div>
        <div className="main-quater-style" style={mainQuarterStyle}>
          <div className="main-quater-text" style={mainQuarterText}>
            <h2>{quarterTitle}</h2>
            {subContent1 !== "" && (
              <p style={subContentStyle}>
                {subContentSpace}
                {subContent1}
              </p>
            )}
            {subContent2 !== "" && (
              <p>
                {subContentSpace}
                {subContent2}
              </p>
            )}
            {subContent3 !== "" && (
              <p>
                {subContentSpace}
                {subContent3}
              </p>
            )}
            {subContent4 !== "" && (
              <p>
                {subContentSpace}
                {subContent4}
              </p>
            )}
            {subContent5 !== "" && (
              <p>
                {subContentSpace}
                {subContent5}
              </p>
            )}
            {subContent6 !== "" && (
              <p>
                {subContentSpace}
                {subContent6}
              </p>
            )}
          </div>
          <img
            className="quarter-icon"
            height="100%"
            style={quarterIcon}
            src={require(`../../../assets/images/${backgroundImage}.png`)}
            alt="Valut/ecosystem Flow Chart"
          />
        </div>
      </div>
      <div className="header-footer" style={partStyle}>
        <div className="header-footer" style={bgStyle}></div>
      </div>
    </div>
  );
}
