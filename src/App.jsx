import './App.css';
import Cv from "./components/cv/cv";
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
          </div>

          <div className="lower">
            <Cv />
          </div>

        </div>

      </div>
    </>

  );
}

export default App;
