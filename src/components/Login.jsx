//1.리액트 훅(hooks)
//2.useRef(초기값)
// useSate -> 컴포넌트를 리빌드(UI변경)
// useRef -> 리빌드x(ui변경x)

import { useRef } from "react";
export default function Login() {
  const idRef = useRef();
  const passwordRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const id = idRef.current.value;
    const password = passwordRef.current.value;
    console.log(id, password);
    const mewData = {};
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" ref={idRef}></input>
        <label htmlFor="password">비밀번호</label>
        <input type="text" id="password" ref={passwordRef}></input>
        <button type="submit">전송</button>
      </form>
    </>
  );
}
