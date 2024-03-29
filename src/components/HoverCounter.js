import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                Imie: {this.props.name}
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter, 7);
