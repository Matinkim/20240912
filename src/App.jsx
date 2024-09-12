import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import postData from "./DUMMY_DATA";
import Main from "./components/Main";
postData;

function App() {
  const [data, setData] = useState("trending");
  // 교수님 가르쳐주신거
  const list = postData[data];

  return (
    <>
      <Header setData={setData} data={data} />
      <Main>
        {list.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </Main>
    </>
  );
}

export default App;
