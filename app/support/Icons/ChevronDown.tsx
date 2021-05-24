import * as React from "react";

function SvgChevronDown(props) {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default SvgChevronDown;
