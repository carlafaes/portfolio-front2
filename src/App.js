import './App.css';
import {Route,Routes} from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

///components
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <CssBaseline />
         <Container disableGutters fixed >
          <Box sx={{ display: { xs: 'block', md: 'none', lg: 'block' } }}>
     <Routes>
      <Route path="/" element={<About />} />
     </Routes>
     </Box>
     </Container>
    </div>
  );
}

export default App;
