import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { v4 as uuidv4 } from "uuid";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Props } from "./index.interfaces";

import styles from "./index.module.css";

export function Post({ avatarUrl, name, role, content, publishedAt }: Props) {
  // Date
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' H:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  // Comment
  const [comments, setComments] = useState(["Saveiro pega no breu"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: any) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: any) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: any) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
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
          name="comment"
          className={styles.commentFormTextArea}
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer className={styles.footer}>
          <button className={styles.commentFormButton} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={uuidv4()}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
