import React from "react";
import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import MusicList from "./Context";

function App() {
  return (
    <>
      <MusicList>
        <Home />
      </MusicList>
    </>
  );
}

export default App;
