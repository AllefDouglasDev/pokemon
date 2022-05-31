import { SVGProps } from "react";

export type SvgProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  color?: string;
};
