import React from "react";

import styles from './Button.module.css'; // this is a way to use import css modules
// import styled from "styled-components";



// const Button = styled.button`
//     width:100%;nn
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     @media (min-width:768px)
//     {
//       width:auto;
//     }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
//`;
// attacked template literal
const Button = props => {
  return (
    <button type={props.type} className={styles['button']} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
// psuedo selectors are represented as '&' in styled components 
export default Button;

// we are importing css files  and that are obj and that obj you will have every class you defined
// css modules take those classes in the css files and change those names to make it unique so other 
//component wont be hampered.