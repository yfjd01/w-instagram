import React, {Component} from 'react' 
//how to import react library, give access to libraries methods
//we can make component by importing Complent class from react

import ReactDOM from 'react-dom'

const tasks = ['Take out the trash', 'Shovel the drive way', 'Walk the dog'];

class List  extends Component {
    //How to use the probs we pass down below
    //this is really important, this points to the component instance that is being rendered
    render() {
        return(
            <ol> 
                { this.props.tasks.map((task, index) => <li key = {index}> {task} </li> )} 
            </ol>
        )
    }    
}

class Title extends Component {
    render () {
        return <h1> { this.props.title } </h1>
    }
}

class Main extends Component {
    //Examples of using Props
    render () {
        return <div> 
            <Title title = {'todos'}/>
            <List tasks = {['Mow the lawn', 'Walk the dog']} />
            <List tasks = {['hose the driveway', 'finish the laundry']}/>
        </div>
    }
}



//This is the compositional model, we combine subcomponents to make a main component
//This is exactly what we had before but we are rendering components this time
ReactDOM.render(<Main/>, document.getElementById('root')); //actually rendering the element onto webpage


//This commit will be for Props for components