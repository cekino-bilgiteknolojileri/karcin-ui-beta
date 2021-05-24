import * as React from "react";

function SvgCheck(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 16"
      fill="currentColor"
      className="idb"
      {...props}
    >
      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
    </svg>
  );
}

export default SvgCheck;
