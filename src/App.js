import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navigation from './Components/Navigation.js';
import Home from './Components/Home/Home';
import StylesGallery from './Components/StylesGallery/StylesGallery';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';


const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>    
          <Route path = '/styles-gallery'>
            <StylesGallery />
          </Route>
          <Route path = '/about'>
            <About />
          </Route>
          <Route path = '/contact'>
            <Contact />
          </Route>
          <Route path = '*'>
            <Redirect to = "/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
 
export default App;