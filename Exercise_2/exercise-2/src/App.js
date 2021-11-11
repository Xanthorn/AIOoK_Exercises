import './App.css';
import PrintPlaces from './PrintPlaces.js';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <PrintPlaces />
      </Row>
    </Container>
  );
}

export default App;
