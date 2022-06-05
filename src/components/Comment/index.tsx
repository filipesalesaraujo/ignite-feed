import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./index.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://github.com/filipesalesaraujo.png"
        alt="Foto de perfil da pessoa que comentou"
        className={styles.avatar}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong className={styles.author}></strong>
              <time
                className={styles.time}
                title="11 de Maio às 08h13"
                dateTime="2022-05-11 08:13:30"
              >
                Cercade 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
