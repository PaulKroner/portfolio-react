import './App.css';
import Cv from "./components/cv/cv";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Welcome from './components/welcome/welcome';

function App() {

  // Loader Animation
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#page-loader").style.visibility = "visible";
    } else {
      document.querySelector(
        "#page-loader").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
      document.querySelector(
        "#page-loader-center").classList.remove("center");
    }
  };
  return (
    <>
      {/* Loader */}
      <div className="center" id="page-loader-center">
        <div className="loader" id="page-loader"></div>
      </div>

      <div className="main-container" id="main-container">

        <div className="middle-container">

          <div className="left-container">
            sidebar
          </div>

          <div className="mid-container">
            <Welcome />
            <div className="lower">
              <Cv />
              <Projects />
              {/* <Skills /> */}
            </div>
          </div>



        </div>

      </div>
    </>

  );
}

export default App;
