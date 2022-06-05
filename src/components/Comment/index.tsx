import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./index.module.css";

import { Props } from "./index.interfaces";

export function Comment({ content }: Props) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/filipesalesaraujo.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong className={styles.author}>Filipe Sales</strong>
              <time
                className={styles.time}
                title="11 de Maio às 08h13"
                dateTime="2022-05-11 08:13:30"
              >
                Cercade 1h atrás
              </time>
            </div>
            <button className={styles.delete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p className={styles.commentText}>{content}</p>
        </div>
        <footer className={styles.footer}>
          <button className={styles.applaud}>
            <ThumbsUp />
            Aplaudir <span className={styles.applaudCounter}>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
