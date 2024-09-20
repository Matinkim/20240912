//투두리스트 읽어오기(read)
export function getValog() {
  //"["할일","리액트 연습"]"->string
  const data = localStorage.getItem("todos"); //키 이름 todos로 설정
  //데이터가 존재할때
  if (data) {
    // JSON 문자열 -> 자바스크립트 객체로 변환
    return JSON.parse(data);
  }
  //데이터가 존재하지 않을때
  else {
    return [];
  }
}
// 투두리스트 저장(create)
/**
 *
 * @param {Array} todos  //매개변수의 타입을 주석으로 적을 수 있다.
 */

export function setValog(todos) {
  //  JSON -> "["리액트","자바스크립트"]"
  // JSON으로 변환하지 않고 넣으면  ? "[리액트,자바스크립트]"  -JSON 인식 못함
  localStorage.setItem("todos", JSON.stringify(todos)); // ("키이름","배열")
}
// 투두리스트 삭제
export function removeValog(todo) {
  // 현재 가지고 있는 todolist 가져오기
  const todos = getValog();
  //filter 메서드를 사용하여 todo삭제
  const newTodos = todos.filter((e) => e !== todo);

  setValog(newTodos);
  return newTodos;
}
