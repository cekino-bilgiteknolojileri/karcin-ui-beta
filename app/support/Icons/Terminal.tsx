import * as React from "react";

function SvgTerminal(props) {
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
      <path d="M4 17l6-6-6-6M12 19h8" />
    </svg>
  );
}

export default SvgTerminal;
