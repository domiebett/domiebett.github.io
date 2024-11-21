import Intro from "../intro/Intro";
import MyInfo from "../my-info/MyInfo";

import './HomePage.scss';

const HomePage = () => (
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
)

export default HomePage;
