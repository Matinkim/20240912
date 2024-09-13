function onSubmit() {
  function setData(prev) {
    //form에서 받아온 새로운 데이터
    const newData = {
      id: Date.now(),
      title: "dafdf",

      content: "dsafsdaf",
      author: "사용자",
      crateAt: "2024-08-01",
      image: img,
      userImage: userImage,
      Comments: 15,
    };
    // 기존 데이터에서 선택한 카테고리에 맞는 배열값 가져오기
    const prevArray = prev[category];
    // 배열에 새로운데이터 push 하기
    const newArray = [...prevArray, newData];
    // prevArray.push(newData);
    // 객체 반환
    return {
      //기존 객체의 값 넣기
      ...prev,
      // 선택된 카테고리에 값을 push 된 배열값 넣어 주기
      [category]: [...newArray],
    };
  }
}
