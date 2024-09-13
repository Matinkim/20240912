import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import postData from "./DUMMY_DATA";
import Main from "./components/Main";
import Form from "./components/Form";

postData;

function App() {
  const [data, setData] = useState("trending");
  const [showCardList, SetShowCardList] = useState(true);
  const [contentsList, setContentsList] = useState(postData);

  // 교수님 가르쳐주신거
  const list = contentsList[data];

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
        <Form setContentsList={setContentsList} />
      )}
    </>
  );
}

export default App;
