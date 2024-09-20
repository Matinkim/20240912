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
