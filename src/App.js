import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CustomNavbar from "./components/CustomNavbar";
import Cardz from "./components/Cardz";
import MusicVideos from './components/MusicVideos';
import News from './components/News';

function App() {
  return (
    <Router>
      <React.Fragment>
        <CustomNavbar />
        <Route path="/News" component={News} />
        <Route path="/music+videos" component={MusicVideos} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        
      </React.Fragment>
    </Router>
  );
}

export default App;
