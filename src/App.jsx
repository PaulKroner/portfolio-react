import './App.css';
import Cv from "./components/cv/cv";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Welcome from './components/welcome/welcome';
import Questions from './components/questions/questions';
import Footer from './components/footer/footer';
import NavigationBar from "./components/navigationbar/navigationbar";

const App = () => {

  // Loader Animation
  // document.onreadystatechange = function () {
  //   if (document.readyState !== "complete") {
  //     document.querySelector(
  //       "body").style.visibility = "hidden";
  //     document.querySelector(
  //       "#page-loader").style.visibility = "visible";
  //   } else {
  //     document.querySelector(
  //       "#page-loader").style.display = "none";
  //     document.querySelector(
  //       "body").style.visibility = "visible";
  //     document.querySelector(
  //       "#page-loader-center").classList.remove("center");
  //   }
  // };
  return (
    <>
      {/* Loader */}
      <div className="center" id="page-loader-center">
        <div className="loader" id="page-loader"></div>
      </div>

      <div className="main-container" id="main-container">

        <div className="middle-container">

          <div className="left-container">
            <NavigationBar />
          </div>

          <div className="mid-container d-flex flex-column justify-content-center">
            <Welcome />

            <div className="lower">
              <Cv />
              <Projects />
              {/* <Skills /> */}
              <Questions />
              <Footer />
            </div>
          </div>



        </div>

      </div>
    </>

  );
}

export default App;
