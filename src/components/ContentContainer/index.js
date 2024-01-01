import Header from "../Header";
import RightSlideBar from "../RightSlideBar";

import "./index.css";

const ContentContainer = () => (
  <div className="bg-container">
    <Header />
    <div className="container">
      <div className="questions"></div>
      <div className="right-slide-bar-container">
        <RightSlideBar />
      </div>
    </div>
  </div>
);

export default ContentContainer;
