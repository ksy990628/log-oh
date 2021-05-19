import React from "react";

import { IconProps } from "./icons";

function UserPlusIcon({ style, fill }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
      ></path>
      <circle
        cx="8.5"
        cy="7"
        r="4"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 8L20 14"
      ></path>
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M23 11L17 11"
      ></path>
    </svg>
  );
}

export default React.memo(UserPlusIcon);
