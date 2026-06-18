import styles from "./Card.module.css";
import LikeButton from "./LikeButton";

export default function Card({ name,  rating,image }) {
  return (
    <article className={styles.card}>
        {image && <img src={image} alt={name} className={styles.cardImage} />}
      
      <h2>{name}</h2>
      
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
      <LikeButton />
    </article>
  );
}
