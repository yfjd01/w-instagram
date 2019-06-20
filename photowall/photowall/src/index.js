import React from 'react' //how to import react library, give access to libraries methods
import ReactDOM from 'react-dom'

const tasks = ['Take out the trash', 'Shovel the drive way', 'Walk the dog'];

//reacts make use of elements to describe ui, elements are objects duh
//1st argument is tag, 2nd is props, 3rd is content
const element = React.createElement('ol', null, //ol stands for ordered list tag
    tasks.map((task, index) => React.createElement('li', {key: index}, task))
);

//nesting elements can be pretty tedious, the solution is JSX

ReactDOM.render(element, document.getElementById('root')); //actually rendering the element onto webpage
//root element of the document is discributed in public/index.html 