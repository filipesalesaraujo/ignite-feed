import { Comment } from "../Comment";
import styles from "./index.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/filipesalesaraujo.png"
            alt="Foto do autor"
          />
          <div className={styles.authorInfo}>
            <strong className={styles.name}>Filipe Sales</strong>
            <span className={styles.office}>Web Developer</span>
          </div>
        </div>
        <time
          className={styles.time}
          title="11 de Maio às 08h13"
          dateTime="2022-05-11 08:13:30"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong className={styles.commentFormTitle}>Deixe seu feedback</strong>
        <textarea
          className={styles.commentFormTextArea}
          placeholder="Deixe um comentário"
        />
        <footer className={styles.footer}>
          <button className={styles.commentFormButton} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
