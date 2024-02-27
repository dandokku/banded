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
            <Route path="/profile" element={<Profile />} />
            <Route path="/navbar" element={<NavBar />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;




// import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { ThemeProvider } from "@mui/material";
// import CssBaseLine from "@mui/material/CssBaseline";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "theme";

// import Login from "scenes/login/Login"
// // Lazy load components
// const Home = lazy(() => import("scenes/home/Home"));
// // const Login = lazy(() => import("scenes/login/Login"));
// const Profile = lazy(() => import("scenes/profile/Profile"));
// const NavBar = lazy(() => import("scenes/navbar/NavBar"));

// function App() {
//   const mode = useSelector((state) => state.mode);
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   const isAuth = Boolean(useSelector((state) => state.token));

//   return (
//     <div className="app">
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           {/* This resets CSS back to normal */}
//           <CssBaseLine />
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/navbar" element={<NavBar />} />
//             </Routes>
//           </Suspense>
//         </ThemeProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
