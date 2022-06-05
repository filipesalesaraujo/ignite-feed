import { PencilLine } from "phosphor-react";
import styles from "./index.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="Capa de perfil"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/filipesalesaraujo.png"
          alt="Foto de perfil"
        />
        <strong className={styles.name}>Filipe Sales</strong>
        <span className={styles.office}>Werb Developer</span>
        <footer className={styles.footer}>
          <a className={styles.editProfile} href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
