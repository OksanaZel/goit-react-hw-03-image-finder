import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from "./components/SearchBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ToastContainer autoClose={5000} />
      </div>
    )
  }
}

