import React from "react"
import "./App.css"
import { FaAlignJustify } from "react-icons/fa";
import Services from "./components/services"
import About from "./components/About";
import Work from "./components/work";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page from "./components/page";
import Contactform from "./components/contact-form";
import { FooterContainer } from "./components/page-form";

function App() {
  const [state, setState] = React.useState(true);
  return (
    <Router>
          <div className="App">
          <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <h1>Arnav aggarwal</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
        <Switch>
          <Route  path="/" exact component={Page}/>
          <Route  path="/about" component={About}/>
          <Route  path="/skills" component={Services}/>
          <Route  path="/work" component={Work}/>
          <Route path="/contact" component={Contactform}/>
        </Switch>
      <FooterContainer/>
    </div>
    </Router>

  );
}

export default App;
