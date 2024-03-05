// import React, {lazy, Suspense} from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Home from "scenes/home/Home"
import Login from "scenes/login/Login"
import Profile from "scenes/profile/Profile"
import NavBar from "scenes/navbar/NavBar"

import { useMemo } from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "@mui/material"
import CssBaseLine from "@mui/material/CssBaseline" 
import {createTheme } from "@mui/material/styles"
import { themeSettings } from "theme"


function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
           {/* this resets css back to normal */}
          <CssBaseLine />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
            <Route
              path="/profile/:userId"
              element={isAuth ? <Profile /> : <Navigate to="/" />}
            />
            <Route path="/navbar" element={<NavBar />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
