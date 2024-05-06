import './App.css';
import Welcome from './components/welcome/welcome';

function App() {
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
            
          </div>

        </div>

      </div>
    </>

  );
}

export default App;
