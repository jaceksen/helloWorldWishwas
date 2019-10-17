import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentCompnent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             paranetName: 'Parent'
        }
    }

    greetParent = (childName) => {
        alert(`Hello ${this.state.paranetName} from ${childName}`);
    }
    

    render() {
        return (
            <div>
               <ChildComponent greetHandler={this.greetParent}/> 
            </div>
        )
    }
}

export default ParentCompnent
