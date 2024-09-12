import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
export default function Header({ data, setData }) {
  return (
    <>
      <header>
        <h1>velog</h1>
        <button
          className={data === "trending" ? "go" : "no"}
          onClick={() => setData("trending")}
        >
          <FontAwesomeIcon icon={faArrowTrendUp} /> 트렌딩
        </button>
        <button
          className={data === "latest" ? "go" : "no"}
          onClick={() => setData("latest")}
        >
          <FontAwesomeIcon icon={faClock} /> 최신
        </button>
        <button
          className={data === "feed" ? "go" : "no"}
          onClick={() => setData("feed")}
        >
          <FontAwesomeIcon icon={faRss} /> 피드
        </button>
      </header>
    </>
  );
}
