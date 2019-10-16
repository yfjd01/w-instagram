import React, {Component} from 'react';
import List from './List'
import Title from './Title'

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

export default Main