import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CustomNavbar from './components/CustomNavbar';
import Cardz from './components/Cardz';



function App() {
  return (
      <Router>
        <React.Fragment>
          <CustomNavbar />
          <Cardz />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
      </React.Fragment>
      </Router>
  );
}

export default App;
