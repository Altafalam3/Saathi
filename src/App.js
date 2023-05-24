import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
