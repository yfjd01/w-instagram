import React from 'react' //how to import react library, give access to libraries methods
import ReactDOM from 'react-dom'

const tasks = ['Take out the trash', 'Shovel the drive way', 'Walk the dog'];

//Since we use create-react-app, we are actually using something to 
//compile our jsx to be javascript
const element = 
<div> 
    <h1> Nice </h1>
    <ol> 
        { tasks.map((task, index) => <li key = {index}> {task} </li> )} 
    </ol>
</div> //we need a div tag as jsx elements require only one element 

//element is basically createElement atm
ReactDOM.render(element, document.getElementById('root')); //actually rendering the element onto webpage
