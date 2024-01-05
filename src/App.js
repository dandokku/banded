import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Home from "scenes/home/Home"
import Login from "scenes/login/Login"
import Profile from "scenes/profile/Profile"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
