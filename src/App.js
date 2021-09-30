import React from "react";
import About from "./About/About";
import Card from "./Card/Card";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Card></Card>
      <About></About>
    </div>
  );
};

export default App;
