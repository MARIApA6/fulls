import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';



const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};


/*function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Header />
          <Route path='/' />
          <Footer />
        </Routes>

      </Router>

    </div>
  );
}
*/

export default App;
