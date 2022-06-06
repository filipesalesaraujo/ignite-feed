import { ImgHTMLAttributes } from "react";

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
