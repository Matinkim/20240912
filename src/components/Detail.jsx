//forwardRef

import { forwardRef, useImperativeHandle, useRef } from "react";

const detail = forwardRef(function Detail({ title, content, image }, ref) {
  const dialogChild = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialogChild.current.showModal();
      },
      time: () => {
        console.log("환씨타임");
      },
      closeModal: () => {
        setTimeout(() => {
          dialogChild.current.close();
        }, 2000);
      },
    };
  });
  function off() {
    dialogChild.current.close();
  }

  return (
    <dialog onClick={off} ref={dialogChild}>
      <h4>{title}</h4>
      <p>{content}</p>
      <img src={image} alt="" />
      <br />
      <button>삭제</button>
    </dialog>
  );
});

export default detail;
