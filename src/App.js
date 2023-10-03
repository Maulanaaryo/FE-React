// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1> Basic React </h1>
      </div>
      <hr />

      <Profile />
    </div>
  );
}

export default App;
