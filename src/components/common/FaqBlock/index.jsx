import React from "react";

export default function (props) {
  const {
    className,
    title,
    title2,
    subTitle,
    faq,
    content,
    background,
    mainColor,
    subColor,
    borderColor,
    width,
    height,
  } = props;

  const mainStyle = {
    background: background,
    boxSizing: "border-box",
    borderRight: `12px solid ${borderColor}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: `${width}px`,
    height: `100%`,
    color: mainColor,
    fontWeight: 600,
    paddingLeft: 20
  };

  const headerStyle = {
    fontSize: "18px",
    color: mainColor,
    marginLeft: 6,
    paddingTop: 2
  };

  const subHeaderStyle = {
    fontSize: "12px",
    color: subColor,
    marginLeft: 6,
    paddingTop: 12
  };

  const faqStyle = {
    fontSize: "22px",
    color: "#ff8200",
    paddingTop: 20
  };

  const contentStyle = {
    fontSize: "22px",
    color: mainColor,
    paddingTop: 2
  };

  return (
    <div className={className} style={mainStyle}>
      <span style={headerStyle}>{title}</span>
      {title2 !== "" && <span style={headerStyle}>{title2}</span>}
      <span style={subHeaderStyle}>{subTitle}</span>
      <span style={faqStyle}>{faq}</span>
      <span style={contentStyle}>{content}</span>
    </div>
  );
}
