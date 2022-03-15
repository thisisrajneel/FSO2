import React from "react";

const Details = ({  name, number, id, deleteName }) => (
    <li key={id} >
        {name} {number} <button onClick={() => deleteName(id, name)} >Delete</button>
    </li>
);

export default Details;
