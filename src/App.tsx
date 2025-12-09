import "./App.css";
import { Route, Routes } from "react-router-dom";
import Headers from "./Rail-Dev/RailHeader.Component";
import Home from "./Rail-Dev/Home.Component";
import Submission from "./Rail-Dev/Submission.Component";
import Crew from "./Rail-Dev/Crew.Component";
import Terminal from "./Rail-Dev/Terminal.Component";

function App() {
  return (
    <>
      <Headers />
      <div className="main-sections">
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="submission" element={<Submission />}></Route>
          <Route path="crew" element={<Crew />}></Route>
          <Route path="terminal" element={<Terminal />}></Route>
        </Routes>
      </div>
      <div className="footer">
        <p>www.RailTechGroups.com.in | @copyrights</p>
      </div>
    </>
  );
}
export default App;
