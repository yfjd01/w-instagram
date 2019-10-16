import React, {Component} from 'react';

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

export default List