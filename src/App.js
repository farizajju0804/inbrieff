import "./App.css";
import Nav from "./Components/Nav/Nav";
import DoYouKnow from "./Components/DoYouKnow/DoYouKnow"
import video from "./assets/background.mp4"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="Home">
        <Nav/>
        {/* <DoYouKnow/> */}
        <video id="background-video" autoplay loop muted poster="">
        <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <div className="DoYouKnow">
        <DoYouKnow/>
      </div>
      {/* <div className="Features">
        <DoYouKnow/>
      </div> */}
      
    </Router>
  );
};

export default App;
