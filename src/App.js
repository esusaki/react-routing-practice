import './App.css';
import Homepage from './Homepage';
import Aboutme from './Aboutme';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path = '/' element = {<Homepage />}/>
          <Route  path = '/about-me' element = {<Aboutme />}/>
        </Routes>
    </div>
  );
}

export default App;
