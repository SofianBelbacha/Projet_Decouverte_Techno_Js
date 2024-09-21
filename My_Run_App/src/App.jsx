import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import du JS Bootstrap + Popper.js
import './App.css'
import Runs from './Runs';
import Navbar from './Navbar';
import Home from './Home';
import AddRun from './AddRun';
import DelRun from './DelRun';
import Profile from './Profile';


function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/runs" element={<Runs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addrun" element={<AddRun />} />
        <Route path="/delrun" element={<DelRun />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
