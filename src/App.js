import './App.css';
import {Route,Routes} from 'react-router-dom';

///components
import About from './Components/About';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<About />} />
     </Routes>
    </div>
  );
}

export default App;
