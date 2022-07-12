import './App.css';
import {Route,Routes} from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import Grid from '@mui/material/Grid';



///components
import Download from './Components/Download';
import All from './Components/All';

function App() {
  return (
    <div className="App">
     <Paper>
     <Grid container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
     <Routes>
      <Route path="/" element={<All />} />
      <Route path="/curriculum" element={<Download />} />
     </Routes>
     </Grid>
     </Paper>
    </div>
  );
}

export default App;
