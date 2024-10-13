import './App.css';
import FAQ from './components/FAQ';
import IndividualsNumbers from './components/IndividualsNumbers';

function App() {
  return (
    <>
      <div className="home position-relative">
        <IndividualsNumbers />
        <FAQ />
        <a href="tel:01068999933">
          <div
            className="callus main-color rounded-pill d-flex justify-content-center align-items-center position-fixed bottom-0 end-0 m-3"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="fas fa-phone fa-xl text-white"></i>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
