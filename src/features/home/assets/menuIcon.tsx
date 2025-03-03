import * as React from "react";
import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32px"
    height="32px"
    {...props}
  >
    <path
      d="M16 4a12 12 0 1 0 12 12A12.013 12.013 0 0 0 16 4Zm-6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm6 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm6 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
    />
  </svg>
);
export { MenuIcon };
