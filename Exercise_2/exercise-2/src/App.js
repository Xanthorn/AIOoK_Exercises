import './App.css';
import PrintPlaces from './PrintPlaces.jsx';
import PrintDistance from './PrintDistance.jsx';

function App() {
  return (
    <div className="container">
      <div className="row">
        <PrintPlaces />
      </div>
      <div className="row">
        <PrintDistance 
          firstXDegrees="150" firstXMinutes="25" firstXDirection="E"
          firstYDegrees="35" firstYSeconds="54" firstYDirection="S"

          secondXDegrees="50" secondXSeconds="45" secondXDirection="W"
          secondYDegrees="25" secondYMinutes="13" secondYDirection="N" 
          />
      </div>
    </div>
  );
}

export default App;
