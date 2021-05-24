import * as React from "react";

function SvgBarChart2(props) {
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
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

export default SvgBarChart2;
