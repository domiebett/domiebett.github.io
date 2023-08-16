import "./Content.scss";
import Intro from "./intro/Intro";
import MyInfo from "./my-info/MyInfo";

const Content = () => (
  <>
    <div className="Content">
      <div className="Panel">
        <Intro />
      </div>
      <div className="Panel">
        <MyInfo />
      </div>
    </div>
  </>
);

export default Content;
