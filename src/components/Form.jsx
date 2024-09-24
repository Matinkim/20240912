import React, { useRef, useState } from "react";
import styles from "./Form.module.css";

export default function Form({ handleFormSubmit, setContentsList }) {
  const titleRef = useRef();
  const tagRef = useRef();
  const textEditorRef = useRef();
  const [category, setCategory] = useState(""); // 초기값 설정

  function onSubmit(e) {
    e.preventDefault();

    const titleValue = titleRef.current.value;
    const tagValue = tagRef.current.value;
    const textEditorValue = textEditorRef.current.value;

    console.log("Title:", titleValue);
    console.log("Tag:", tagValue);
    console.log("Text Editor Content:", textEditorValue);
    // 추가
    handleFormSubmit({
      title: titleValue,
      tag: tagValue,
      content: textEditorValue,
      category: category,
    });

    setContentsList((prev) => {
      const newData = {
        id: Date.now(),
        title: titleValue,
        content: textEditorValue,
        author: tagValue,
        createdAt: new Date().toISOString().split("T")[0], // 현재 날짜 설정
        image:
          "https://images.unsplash.com/photo-1725900653710-d1db440048bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
        userImage: "https://randomuser.me/api/portraits/men/60.jpg",
        Comments: 0,
        likes: 0,
      };
      const prevArray = prev[category] || []; // category가 없는 경우 빈 배열로 초기화
      const newArray = [...prevArray, newData];

      return {
        ...prev,
        [category]: newArray,
      };
    });
  }

  return (
    <form onSubmit={onSubmit} className={styles.titleForm}>
      <textarea
        ref={titleRef}
        placeholder="제목을 입력하세요"
        className={styles.title}
      />
      <div className={styles.bar}></div>
      <input
        ref={tagRef}
        placeholder="태그를 입력하세요"
        className={styles.tag}
      />
      <div className={styles.textEditorContainer}>
        <textarea
          ref={textEditorRef}
          placeholder="당신의 이야기를 적어보세요..."
          className={styles.textEditor}
        />
      </div>

      <button type="button" onClick={() => setCategory("trending")}>
        트렌딩
      </button>
      <button type="button" onClick={() => setCategory("latest")}>
        최신
      </button>
      <button type="button" onClick={() => setCategory("feed")}>
        피드
      </button>
      <button type="submit">전송</button>
    </form>
  );
}
