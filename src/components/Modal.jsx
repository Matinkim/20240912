export default function Modal() {
  return (
    (
      <dialog ref={dialogChild}>
        <h2>모달창</h2>
        <p>{targetTime}초가 지났습니다.</p>
        <form action="">
          <button>close</button>
        </form>
      </dialog>
    ),
    document.getElementById("modal")
  );
}
