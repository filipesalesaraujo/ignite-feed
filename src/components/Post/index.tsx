import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Props } from "./index.interfaces";

import styles from "./index.module.css";

export function Post({ avatarUrl, name, role, content, publishedAt }: Props) {
  const renderedPublishedAt = publishedAt.toString();

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
          title="11 de Maio às 08h13"
          dateTime={renderedPublishedAt}
        >
          {renderedPublishedAt}
        </time>
      </header>
      <div className={styles.content}>{content}</div>
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
