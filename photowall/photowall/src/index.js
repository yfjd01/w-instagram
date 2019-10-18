import React, {Component} from 'react' 
//how to import react library, give access to libraries methods
//we can make component by importing Complent class from react
import Main from './Components/Main'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'

//This is the compositional model, we combine subcomponents to make a main component
//This is exactly what we had before but we are rendering components this time
ReactDOM.render(<Main/>, document.getElementById('root')); //actually rendering the element onto webpage

//This commit will be for Props for components