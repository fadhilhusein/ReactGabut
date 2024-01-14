import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Components/Card/Card';
import Layout from './Components/Layout/Layout';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout/>}>
          <Route path="card" element={<Card/>}/>
        </Route> */}
        <Route path="/" element={<Navbar/>}>
          <Route path='home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
