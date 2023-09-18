import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='*' element={<div>
            <h1>404 NOT FOUND!</h1>
          </div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
