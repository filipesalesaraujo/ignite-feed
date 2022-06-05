import styles from "./index.module.css";

import { Props } from "./index.interfaces";

export function Avatar({ src, hasBorder = true }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="Foto de perfil"
    />
  );
}
