import * as React from "react";

function SvgCompare(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 20 16"
      height="1em"
      width="1em"
      className="idb"
      {...props}
    >
      <path d="M0 8l6-5v3h8V3l6 5-6 5v-3H6v3L0 8z" stroke="none" />
    </svg>
  );
}

export default SvgCompare;
