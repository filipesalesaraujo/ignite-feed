import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./index.module.css";

import { Props } from "./index.interfaces";
import { useState } from "react";

export function Comment({ content, onDeleteComment }: Props) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/filipesalesaraujo.png"
        alt="Foto de perfil"
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
            <button
              onClick={handleDeleteComment}
              className={styles.delete}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className={styles.commentText}>{content}</p>
        </div>
        <footer className={styles.footer}>
          <button className={styles.applaud} onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span className={styles.applaudCounter}>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
