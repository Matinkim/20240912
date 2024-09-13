import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
export default function Header({
  data,
  setData,
  showCardList,
  SetShowCardList,
}) {
  return (
    <>
      <header>
        <div className="buttonwrite">
          <h1>valog</h1>
          <button
            onClick={() => SetShowCardList((prev) => !prev)}
            className="writeBtn"
          >
            {showCardList ? "글작성" : "메인으로"}
          </button>
        </div>

        <a
          href="#"
          className={data === "trending" ? "go" : "no"}
          onClick={() => setData("trending")}
        >
          <FontAwesomeIcon icon={faArrowTrendUp} />
          <span>트렌딩</span>
        </a>

        <a
          href="#"
          className={data === "latest" ? "go" : "no"}
          onClick={() => setData("latest")}
        >
          <FontAwesomeIcon icon={faClock} />
          <span>최신</span>
        </a>
        <a
          href="#"
          className={data === "feed" ? "go" : "no"}
          onClick={() => setData("feed")}
        >
          <FontAwesomeIcon icon={faRss} />
          <span>피드</span>
        </a>
      </header>
    </>
  );
}
