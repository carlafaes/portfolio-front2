import './App.css';
import {Route,Routes} from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

///components
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <CssBaseline />
         <Container disableGutters>
     <Routes>
      <Route path="/" element={<About />} />
     </Routes>
     </Container>
    </div>
  );
}

export default App;
