import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Products from "./components/Products";
import FavoriteList from "./components/FavoriteList";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Products />
      <FavoriteList />
    </div>
  );
}

export default App;
