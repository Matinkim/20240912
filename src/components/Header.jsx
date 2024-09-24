import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faClock,
  faRss,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({
  data,
  setData,
  showCardList,
  SetShowCardList,
  weather,
  loading,
}) {
  return (
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
  );
}
