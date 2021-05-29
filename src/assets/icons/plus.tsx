import React from "react";

import { IconProps } from "./icons";

function PlusIcon({ style, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 5L12 19"></path>
      <path d="M5 12L19 12"></path>
    </svg>
  );
}

export default PlusIcon;
