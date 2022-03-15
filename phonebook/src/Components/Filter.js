import React from "react";

const Filter = ({ persons, setPersonsToShow }) => {
  const nameFilter = (event) => {
    let a = event.target.value;
    const showPerson = persons.filter(
      (person) => person.name.toLowerCase().includes(a.toLowerCase()) === true
    );
    setPersonsToShow(showPerson);
  };
  return (
    <>
      filter shown with <input onChange={nameFilter} />
    </>
  );
};

export default Filter;
