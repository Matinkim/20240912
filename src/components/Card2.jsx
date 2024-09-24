import { useRef } from "react";
import Styles from "./Card.module.css";
import Detail from "./Detail";

export default function Card({
  id, // 카드의 고유 ID 추가
  title,
  content,
  author,
  createdAt,
  image,
  likes,
  userImage,
  comments,
  onDelete, // 삭제 핸들러
}) {
  const modalRef = useRef();

  function open() {
    modalRef.current.openModal(); // 모달 열기
  }

  function handleDelete() {
    // 로컬 스토리지에서 해당 카드 삭제
    localStorage.removeItem(`post_${id}`); // 카드의 ID를 기반으로 로컬 스토리지에서 삭제
    if (onDelete) {
      onDelete(id); // 부모 컴포넌트에서 추가 작업을 할 수 있도록 호출
    }
  }

  return (
    <>
      <Detail ref={modalRef} title={title} image={image} content={content} />
      <div onClick={open} className={Styles.cardCard}>
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
          <span className={Styles.likes}>♥{likes}</span>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </>
  );
}
