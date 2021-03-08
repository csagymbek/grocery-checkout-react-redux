import React, { Component } from "react";
import GroceryItems from "./components/GroceryItems";
import "./App.css";
import GroceryCart from "./components/GroceryCart";
import History from "./components/History";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>Grocery Cart</h1>
        <History />
        <div id="grocery-container">
          <GroceryItems />
          <GroceryCart />
        </div>
      </div>
    );
  }
}
