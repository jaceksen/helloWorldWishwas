import React, { Component } from 'react'

class ClickCounterTwo extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1};
    //     })
    // }
    
    render() {
        // const { count } = this.state;
        const { count, incrementCount } = this.props
        return (
            <div>
                {/* <button onClick={this.incrementCount}>clcked {count} times</button> */}
                <button onClick={incrementCount}>clcked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
