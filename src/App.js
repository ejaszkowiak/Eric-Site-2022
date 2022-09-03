import './styles/core/all.css';
import Guitar from './projectRoutes/guitar';
import AssortedProjects from './projectRoutes/assorted_projects';
import Robot from './projectRoutes/robot';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/guitar' element={<Guitar />} />
          <Route path='/robot' element={<Robot />} />
          <Route path='/assorted_projects' element={<AssortedProjects />} />
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
