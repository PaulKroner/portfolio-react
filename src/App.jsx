import './App.css';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <>
      <div className="center" id="page-loader-center">
        <div className="loader" id="page-loader"></div>
      </div>
      <div className="main-container" id="main-container">
        <Welcome />
      </div>
    </>

  );
}

export default App;
