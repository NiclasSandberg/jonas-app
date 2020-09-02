import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";
import MusicVideos from './pages/MusicVideos';
import MusicPlatforms from './pages/MusicPlatforms';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <React.Fragment>
        <CustomNavbar />
        
        <Route exact path="/" component={Home} />
        <Route path="/jonas-app/" component={Home} />
        <Route path="/music+videos" component={MusicVideos} />
        <Route path="/MusicPlatforms" component={MusicPlatforms} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        
      </React.Fragment>
    </Router>
  );
}

export default App;
