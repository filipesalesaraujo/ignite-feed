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
        <strong>Filipe Sales</strong>
        <span>Werb Developer</span>
        <footer className={styles.footer}>
          <a className={styles.editProfile} href="#">Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  );
}