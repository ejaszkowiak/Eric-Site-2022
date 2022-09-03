import './styles/core/all.css';
import Guitar from './projectRoutes/guitar';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/guitar' element={<Guitar />} />
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
