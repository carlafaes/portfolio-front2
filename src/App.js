import './App.css';
import {Route,Routes} from 'react-router-dom';
import Container from '@mui/material/Container';

///components
import About from './Components/About';

function App() {
  return (
    <div className="App">
         <Container maxWidth={["sm","xxl","xs","lg"]}>
     <Routes>
      <Route path="/" element={<About />} />
     </Routes>
     </Container>
    </div>
  );
}

export default App;
