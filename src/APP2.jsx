import { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
// import postData from "./DUMMY_DATA";
import Main from "./components/Main";
import Form from "./components/Form";
import Detail from "./components/Detail";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState("trending");
  const [showCardList, SetShowCardList] = useState(true);
  const [contentsList, setContentsList] = useState({
    trending: [],
    latest: [],
    feed: [],
  });

  const [showModal, setShowModal] = useState(false); // 모달
  const detailRef = useRef();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("key"));
    if (!data) {
      // 더미데이터를 임시로 넣어주기
      localStorage.setItem("key", JSON.stringify(postData));
      data = JSON.parse(localStorage.getItem("key"));
    }
    setContentsList(data);
  }, []);

  const list = contentsList[data];

  const handleFormSubmit = () => {
    setShowModal(true);
    detailRef.current.openModal();
    detailRef.current.closeModal();
  };

  const handleDelete = (id) => {
    setContentsList((prev) => {
      const updatedData = { ...prev };
      updatedData[data] = updatedData[data].filter((item) => item.id !== id);
      localStorage.setItem("key", JSON.stringify(updatedData)); // 로컬 스토리지 업데이트
      return updatedData;
    });
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
            <Card key={cardData.id} {...cardData} onDelete={handleDelete} />
          ))}
        </Main>
      ) : (
        <Form
          setContentsList={setContentsList}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      <Detail ref={detailRef} title={"글작성했습니다!"} />
      <Weather />
    </>
  );
}

export default App;
