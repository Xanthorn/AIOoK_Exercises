import './App.css';
import PrintCrew from './PrintCrew';
import PrintCrewAge from './PrintCrewAge';

function App() {
  return (
    <div className="container">
      <div className="row">
        <PrintCrew />
      </div>
      <div className="row">
        <PrintCrewAge />
      </div>
    </div>
  );
}

export default App;
