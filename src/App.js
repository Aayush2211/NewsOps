// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar 
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} pageSize = {6} country = "in" category = "general"/>} />
        <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "business" pageSize = {6} country = "in" category = "business"/>} />
        <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "entertaiment" pageSize = {6} country = "in" category = "entertainment"/>} />
        <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "health" pageSize = {6} country = "in" category = "health"/>} />
        <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "science" pageSize = {6} country = "in" category = "science"/>} />
        <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "sports" pageSize = {6} country = "in" category = "sports"/>} />
        <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "technology" pageSize = {6} country = "in" category = "technology"/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}

