import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import ReactDOM from 'react-dom'

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

this.state = {animate: false}
function changeState() {
  this.state.animate = true
}

var sectionStyle = {
    width: "100%",
    height: "100%",
  };

const MyComponent = () => (
  <SwipeableViews enableMouseEvents animateHeight={this.state.animate} onClick={changeState}>
    <About style={Object.assign({}, styles.slide, styles.slide1)} style={sectionStyle}/>
    <Artist style={Object.assign({}, styles.slide, styles.slide2)} style={sectionStyle}/>
    <Developer style={Object.assign({}, styles.slide, styles.slide3)} style={sectionStyle}/>
    <Journalism style={Object.assign({}, styles.slide, styles.slide3)} style={sectionStyle}/>
  </SwipeableViews>
);

ReactDOM.render(<MyComponent/>, document.querySelector('#root'))
