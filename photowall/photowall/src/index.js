import React, {Component} from 'react' 
//how to import react library, give access to libraries methods
//we can make component by importing Complent class from react

import ReactDOM from 'react-dom'

const tasks = ['Take out the trash', 'Shovel the drive way', 'Walk the dog'];

class List  extends Component { //This is a component class that we extended
    //render returns elements taht describe what we see on the screen
    render() {
        return(<ol> 
                    { tasks.map((task, index) => <li key = {index}> {task} </li> )} 
                </ol>)
    }    
}

class Title extends Component {
    render () {
        return <h1> Nice </h1>
    }
}

class Main extends Component {
    render () {
        return <div> 
            <Title/>
            <List/>
            <List/>
        </div>
    }
}

//This is the compositional model, we combine subcomponents to make a main component
//This is exactly what we had before but we are rendering components this time
ReactDOM.render(<Main/>, document.getElementById('root')); //actually rendering the element onto webpage
