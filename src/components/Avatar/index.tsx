import styles from "./index.module.css";

import { Props } from "./index.interfaces";

export function Avatar({ hasBorder = true, ...rest }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
}
