import logo from './logo.svg';
import './App.css';
import CompShowStock from './Stock/ShowStock.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateStock from './Stock/CreateStock.js'
import CompEditBlog from './Stock/EditStock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompShowStock></CompShowStock>}></Route>
        <Route path='/create' element={<CompCreateStock></CompCreateStock>}></Route>
        <Route path='/edit/:id' element={<CompEditBlog></CompEditBlog>}></Route>     
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
