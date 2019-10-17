import React, { Component } from 'react';

// class Welcome extends Component {
//     render() {
//         return <h1>Welcome.js { this.props.rodzaj } {this.props.rodzaj2 }</h1>
//     }
// }

//destructuring
class Welcome extends Component {
    render() {
        const {rodzaj, rodzaj2} = this.props;
        // const {rodzaj3, rodzaj4} = this.state;
        return <h1>Welcome.js { rodzaj } {rodzaj2 }</h1>
    }
}

export default Welcome;
