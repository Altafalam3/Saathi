import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Landing from "./screens/Landing";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;