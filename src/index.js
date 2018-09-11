import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from 'react-swipeable-routes';
import styled from 'styled-components'

import About from './components/about'
import Artist from './components/artist'
import Developer from './components/developer'
import Journalism from './components/journalism'

const styles = {
  slide: {
    padding: 15,
    minHeight: 500,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const sectionStyle = {
  width: "100%",
  height: "100%",
};

const StyledLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
  font-family: Helvetica, sans-serif;
  font-weight: 800;
  font-size: 30px;

  &:hover {
    background-color: #111;
  }
  &.active {
    color: red;
  }
`

const NavLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
  font-family: Helvetica, sans-serif;

  &:hover {
    background-color: #111;
  }
  &.active {
    color: red;
  }
`;

const aboutView = () => (
  <About style={Object.assign({}, styles.slide, styles.slide1)} style={sectionStyle}/>
);

const developerView = () => (
  <Developer style={Object.assign({}, styles.slide, styles.slide3)} style={sectionStyle}/>
)

const journalismView = () => (
  <Journalism style={Object.assign({}, styles.slide, styles.slide3)} style={sectionStyle}/>
)

const artistView = () => (
  <Artist style={Object.assign({}, styles.slide, styles.slide2)} style={sectionStyle}/>
)

const NavBar = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  transition: all 0.2s ease 0s;
  top: -75px;
  position: fixed;
  width: 100%;
  z-index: 1;
`

const NavButton = styled.div`
  float: right;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  margin-top: 8.5px;
`



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false, 
      slide: -75,  // How much should the Navbar slide up or down
    } 

    // Bind the function to this component, so it has access to this.state
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 75) {
      this.setState({ slide: '0px' });
    } else {
      this.setState({ slide: '-75px' });
    }
  };

  render() {
    return (
      (<Router>
        <div>
          <NavBar style={{
            top: `${this.state.slide}`,
          }}>
            <NavButton style={{float: 'left', marginTop: '0px',}}><StyledLink href="ikelee.me" >Ike Lee</StyledLink></NavButton>
            <NavButton><NavLink to="/journalism">Journalism</NavLink></NavButton> 
            <NavButton><NavLink to="/developer">Developer</NavLink></NavButton>
            <NavButton><NavLink to="/artist">Artist</NavLink></NavButton>
            <NavButton><NavLink to="/about" >About</NavLink></NavButton>
          </NavBar>
          <SwipeableRoutes enableMouseEvents animateHeight={this.state.animate}>
            <Route path="/about" component={aboutView} />
            <Route path="/developer" component={developerView} />
            <Route path="/journalism" component={journalismView} />
            <Route path="/artist" component={artistView} />
          </SwipeableRoutes>
        </div>
      </Router>
      ));
    }
  }

ReactDOM.render(<MyComponent/>, document.querySelector('#root'))
