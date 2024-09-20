import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import postData from "./DUMMY_DATA";
import Main from "./components/Main";
import Form from "./components/Form";
import Detail from "./components/Detail";

function App() {
  const [data, setData] = useState("trending");
  const [showCardList, SetShowCardList] = useState(true);
  const [contentsList, setContentsList] = useState(postData);
  const [showModal, setShowModal] = useState(false); // 모달
  const detailRef = useRef();

  uesEffect(() => {
    let data = JSON.parse(localStorage.getItem("key"));
    //데이터가 존재하지 않는다면
    if (!data) {
      //더미데이터를 임시로 넣어주기
      localStorage.setItem("key", JSON.stringify(dummydata));
      //로컬스토리지에서 데이터 가져오기
      data = JSON.parse(localStorage.getItem("key"));
      // setState({trending:[], feed:[],latest:[]})
    }
    //가져온 데이터를 set에 저장
    setState(data);
  }, []);

  // 교수님 가르쳐주신거
  const list = contentsList[data];

  const handleFormSubmit = () => {
    setShowModal(true);
    detailRef.current.openModal();
    detailRef.current.closeModal();
  };

  return (
    <>
      <Header
        setData={setData}
        data={data}
        showCardList={showCardList}
        SetShowCardList={SetShowCardList}
      />

      {showCardList ? (
        <Main>
          {list.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </Main>
      ) : (
        <Form setContentsList={setContentsList} onSubmit={handleFormSubmit} />
      )}

      <Detail ref={detailRef} title={"글작성했습니다!"} />
    </>
  );
}

export default App;
