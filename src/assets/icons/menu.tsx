import { IconProps } from "./icons";

export default function MenuIcon({ style, fill }: IconProps) {
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
      <path d="M3 12L21 12"></path>
      <path d="M3 6L21 6"></path>
      <path d="M3 18L21 18"></path>
    </svg>
  );
}
