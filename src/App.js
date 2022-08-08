import './App.css';
import NavBar from './component/NavBar';
import Search from './component/Search';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Login from './component/Login&SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/Home' element={<Home  />} />
        <Route path='/Exercise' element={<Exercise />} />
      </Routes>
    </div>
  );
}

export default App;
