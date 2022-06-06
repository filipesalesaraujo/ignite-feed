import styles from "./index.module.css";

import { Props } from "./index.interfaces";

export function Wrapper({ children }: Props) {
  return <main className={styles.wrapper}>{children}</main>;
}
