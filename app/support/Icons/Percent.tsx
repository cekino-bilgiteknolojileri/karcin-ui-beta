import * as React from "react";

function SvgPercent(props) {
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
      <path d="M19 5L5 19" />
      <circle cx={6.5} cy={6.5} r={2.5} />
      <circle cx={17.5} cy={17.5} r={2.5} />
    </svg>
  );
}

export default SvgPercent;
