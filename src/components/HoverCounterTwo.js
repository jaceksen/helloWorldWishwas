import React, { Component } from 'react'

class HoverCounterTwo extends Component {

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
        // const { count } = this.state
        const { count, incrementCount } = this.props
        return (
            <div>
                {/* <h2 onMouseOver={this.incrementCount}>Hovered {count} times.</h2> */}
                <h2 onMouseOver={incrementCount}>Hovered {count} times.</h2>
            </div>
        )
    }
}

export default HoverCounterTwo
