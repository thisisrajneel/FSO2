import React from "react";

const Form = ({ newName, newNumber, handleNewName, handleNewNumber, addNewName }) => {
  
  return (
    <form onSubmit={addNewName}>
      <div>
        name: <input value={newName} onChange={handleNewName} /> <br />
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
