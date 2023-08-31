import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

  console.log("BUTTON RUNNING") ;
    
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

/**Even if we apply React.memo to this Button component, it re-renders when the button is clicked unlike that DemoOutput component.
 * This is because everytime a Button component is re-rendered it is getting a new set function object  of the useState. 
 * So, basically it compares the previous set function object and the new set function object and as we know in JS, even if we compare two 
 * objects(non-primitive) with the same key-value pair, the result will be false hence, the button component is re-rendered again.
 * Unlike the case with the DemoOutput component which will compare false with false i.e two primitive data types, the reuslt will be true.
 * Hence, it is not re-rendered again.
*/