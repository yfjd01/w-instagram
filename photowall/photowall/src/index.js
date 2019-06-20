import React from 'react' //how to import react library, give access to libraries methods
import ReactDOM from 'react-dom'

//reacts make use of elements to describe ui, elements are objects duh
const element = React.createElement('h1', null, 'Hello World!'); //1st argument is tag, 2nd is props, 3rd is content

ReactDOM.render(element, document.getElementById('root')); //actually rendering the element onto webpage
//root element of the document is discributed in public/index.html 