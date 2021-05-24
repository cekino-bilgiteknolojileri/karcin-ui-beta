import * as React from "react";

function SvgPlug(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 14 16"
      height="1em"
      width="1em"
      className="idb"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M14 6V5h-4V3H8v1H6c-1.03 0-1.77.81-2 2L3 7c-1.66 0-3 1.34-3 3v2h1v-2c0-1.11.89-2 2-2l1 1c.25 1.16.98 2 2 2h2v1h2v-2h4V9h-4V6h4z"
        stroke="none"
      />
    </svg>
  );
}

export default SvgPlug;
