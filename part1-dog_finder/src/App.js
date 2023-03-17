import {Routes,Route} from "react-router-dom"


import './App.css';
import AlldogList from './pages/AlldogList';
import DogDetail from './pages/DogDetail';
import Nav from './Nav';

function App() {

  return (
    <div className="App">
    <Nav/>
    <Routes>
        <Route path='/dogs' element={<AlldogList/>}/>
        <Route path='/dogs/:name' element={<DogDetail/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
