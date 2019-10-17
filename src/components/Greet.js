import React from 'react';

// function Greet() {
//     return <h1>Hello Jacek</h1>
// }

// const Greet = props => {
//   console.log(props.children);
//   return (
//     <div>
//       <h1>Functional {props.name} {props.name2}</h1>
//       { props.children }
//     </div>
//   );
// };

//destructuring
// const Greet = ({name, name2}) => {
//   return (
//     <div>
//       <h1>Functional {name} {name2}</h1>
//     </div>
//   );
// };

//destructuring2
const Greet = props => {
  const {name, name2} = props;
  return (
    <div>
      <h1>Functional {name} {name2}</h1>
    </div>
  );
};

export default Greet;
