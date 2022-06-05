import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Props } from "./index.interfaces";

import styles from "./index.module.css";

export function Post({ avatarUrl, name, role, content, publishedAt }: Props) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' H:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState([1, 2]);

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong className={styles.name}>{name}</strong>
            <span className={styles.role}>{role}</span>
          </div>
        </div>
        <time
          className={styles.time}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>{content}</div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
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
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
