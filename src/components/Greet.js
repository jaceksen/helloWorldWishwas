import React from 'react';

// function Greet() {
//     return <h1>Hello Jacek</h1>
// }

const Greet = props => {
  console.log(props.children);
  return (
    <div>
      <h1>Functional {props.name}</h1>
      { props.children }
    </div>
  );
};

export default Greet;
