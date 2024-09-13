import Styles from "./Card.module.css";

export default function Card({
  title,
  content,
  author,
  createdAt,
  image,
  likes,
  userImage,
  comments,
}) {
  return (
    <div className={Styles.cardCard}>
      <div className={Styles.cardImage}>
        <img src={image} alt="Post image" />
      </div>
      <div className={Styles.cardContent}>
        <h4>{title}</h4>
        <p>{content}</p>
        <div className={Styles.cardMeta}>
          <span className={Styles.createdAt}>{createdAt}</span>
          <span className={Styles.separator}>.</span>
          <span className={Styles.comments}>{comments}</span>
        </div>
      </div>
      <div className={Styles.cardFooter}>
        <img
          src={userImage}
          alt="Author's avatar"
          className={Styles.userImage}
        />
        <span className={Styles.author}>by {author}</span>
        <span className={Styles.likes}>{likes}</span>
      </div>
    </div>
  );
}
