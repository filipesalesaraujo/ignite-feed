import { Props } from "./index.types";

import styles from "./index.module.css";

export function Wrapper({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}
