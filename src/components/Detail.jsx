//forwardRef

import { forwardRef, useImperativeHandle, useRef } from "react";

const detail = forwardRef(function Detail({ title, content, image }, ref) {
  const dialogChild = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialogChild.current.showModal();
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
      <img src={image} alt="Post image" />
    </dialog>
  );
});

export default detail;
