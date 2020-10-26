import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Components/Navigation.js';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
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
        <Route exact path = '/' component = {Home} />
        <Route path = '/services' component = {Services} />
        <Route path = '/about' component = {About} />
        <Route path = '/contact' component = {Contact} />
        <Footer />
      </Router>
    </>
  );
}
 
export default App;