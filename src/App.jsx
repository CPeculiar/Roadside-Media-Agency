import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); 

  return (
    <>
   <Routes>
        <Route exact path="/" element={<HomePage />} />
        
        
  
        <Route exact path="*" element={<NotFound />} />
</Routes>
    </>
  )
}

export default App
