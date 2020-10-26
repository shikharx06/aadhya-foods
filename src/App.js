import React, { useState, useEffect } from "react";
import Main from "./Pages/index";
import Loader from "./components/loader/loader";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  var [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // effect
    const start = setTimeout(() => {
      document.getElementById("loader").classList.add("active");
    }, 10);
    const erase = setTimeout(() => {
      document.getElementById("loader").classList.remove("active");
    }, 2000);
    const end = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => {
      // cleanup
      clearTimeout(start);
      clearTimeout(erase);
      clearTimeout(end);
    };
  }, []);

  return isLoading ? (
    <div className="uk-position-center">
      <Loader />
    </div>
  ) : (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
