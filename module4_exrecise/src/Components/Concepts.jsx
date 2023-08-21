import React from "react";

const Concepts = (props) => {
  return (
    <>
      <li className="concept">
        <img src={props.img} alt={props.title} />
        <h2>{props.tite}</h2>
        <p>{props.desc}</p>
      </li>
    </>
  );
};

export default Concepts;
