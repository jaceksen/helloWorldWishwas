import React, { Component } from 'react';


class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            isLogedIn: false 
        }
    }
    
    
    render() {

        // displayed only if isLoggedIn is true
        return this.state.isLogedIn && (<div>Welcome Jacek5</div>);

        // return (
        //     this.state.isLogedIn ? (
        //     <div>Welcome Jacek4</div> 
        //     ) : (
        //     <div>Welocme Guest4</div>
        //     )
        // )

        // let message;
        // if (this.state.isLogedIn) {
        //     message = <div>Welcome Jacek3</div>
        // } else {
        //     message = <div>Welocom Guest3</div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

        // if (this.state.isLogedIn) {
        //     return (
        //         <div>Welcome Jacek2</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return (
        //     <div>
        //        <div>Welcome Jacek</div> 
        //        <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
