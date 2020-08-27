import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CustomNavbar from "./components/CustomNavbar";
import Cardz from "./components/Cardz";
import MusicVideos from './components/MusicVideos';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <React.Fragment>
        <CustomNavbar />
        
        <Route exact path="/" component={Home} />
        <Route path="/jonas-app/" component={Home} />
        <Route path="/music+videos" component={MusicVideos} />
        <Route path="/news" component={News} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        
      </React.Fragment>
    </Router>
  );
}

export default App;
