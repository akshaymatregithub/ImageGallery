import React, { Component } from 'react';
import Search from "./components/search/Search";
import Header from "./components/Header/index";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <div>
      <Header/>
      <Search />
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
