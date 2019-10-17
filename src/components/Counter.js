import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    logujState = () => {
        console.log('Callback value: ', this.state.count);
    }

    increment() {
        // this set state has two parameters
        // second parameter is the callback function
        // callback function is used to execute the coda after setState 
      this.setState({
          count: this.state.count + 1
      }, this.logujState);
      console.log(this.state.count);
    }

    increment2() {
      this.setState((previousState, props) => ({
          count: previousState.count + 1
      }), this.logujState);
      console.log(this.state.count);
    }

    incrementFive() {
        this.increment2();
        this.increment2();
        this.increment2();
        this.increment2();
        this.increment2();
    }
    

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
