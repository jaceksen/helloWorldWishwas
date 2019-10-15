import React from 'react';

const Hello = () => {
    // return (
    //     <div className="Klasa1">
    //         <h1>JSX</h1>
    //     </div>
    // )
    return React.createElement('div', {id: 'pierwszyDiv', className: 'Kalsa1'}, React.createElement('h1', null, 'Without JSX'));
}

export default Hello;