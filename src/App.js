import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import About from './pages/About'


class App extends React.Component {
 constructor(props){
  super(props);
    this.state={
     title: "Christy Tropila",
     headerLinks: [
       {title: "Home", path: '/'},
       {title: 'About', path: '/about'},
       {title: 'Contact', path: "/contact"}
     ],
     home: {
       title: "Christy Tropila",
       subTitle: "Exploring my imagination with code.",
       text: "I want to bring light to this dark world with projects that make a difference"
     },
     about: {
      title: "About Me"
    },
    contact: {
      title: "Let's Talk"
    }
    }
  }


  render(){


    return(
   <Router>
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom" bg="transparent" expand="lg">
       <Navbar.Brand>Christy Tropila</Navbar.Brand>
       <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
       <Navbar.Collapse id="navbar-toggle">
         <Nav className="ml-auto">        
           <Link className="nav-link" to="/">Home</Link>
           <Link className="nav-link" to="/about">About</Link>
           <Link className="nav-link" to="/contact">Contact</Link>
         </Nav>
       </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
      <Route path="/about" render={()=> <About title={this.state.about.title}  />}/>
      <Route path="/contact" render={()=> <Contact title={this.state.contact.title}/>}/>


      <Footer/>
    </Container>
   </Router>
    )
  }

}

export default App;
