import { useState } from "react";
import styles from "./Comment.module.css";

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className={styles.commentSection}>
      <h2 className={styles.title}>What people are saying</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.textarea}
          placeholder="Write your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        />
        <button type="submit" className={styles.button}>
          Post
        </button>
      </form>

      <ul className={styles.commentList}>
        {comments.map((c, index) => (
          <li key={index} className={styles.commentItem}>
            User{index + 1}: {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
