import styles from "./index.module.css";

import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
