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
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Post image" />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{content}</p>
        <div className="card-meta">
          <span className="created-at">{createdAt}</span>
          <span className="separator">.</span>
          <span className="comments">{comments}</span>
        </div>
      </div>
      <div className="card-footer">
        <img src={userImage} alt="Author's avatar" className="user-image" />
        <span className="author">by {author}</span>
        <span className="likes">{likes}</span>
      </div>
    </div>
  );
}
