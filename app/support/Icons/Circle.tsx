import * as React from "react";

function SvgCircle(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="idb"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
    </svg>
  );
}

export default SvgCircle;
