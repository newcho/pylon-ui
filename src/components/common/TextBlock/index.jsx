import React from "react";

import cx from "classnames";

export default function (props) {
  const { title, children, color } = props;

  const colorClass = color ? color: ""
  return (
    <div className="textblock">
      <div className={cx("textblock__title", colorClass)}>{title}</div>
      <div className="textblock__divider"></div>
      <div className="textblock__content">{children}</div>
    </div>
  );
}
