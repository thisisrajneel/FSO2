import React, { useState } from "react";
import Form from "./Components/PersonForm";
import Details from "./Components/PersonDetails";
import Filter from "./Components/Filter";
import Notification from "./Components/Notification";
import recordService from './services/record'

const App = ({people}) => {

  const [persons, setPersons] = useState([...people]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personsToShow, setPersonsToShow] = useState(people);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleNewName = (event) => {
    let n = event.target.value;
    setNewName(n);
  };

  const handleNewNumber = (event) => {
    let m = event.target.value;
    setNewNumber(m);
  };

  const addNewName = (event) => {
    event.preventDefault();

    let flag = false;
    let rem = false;
    persons.forEach((person) => {
      if (person.name === newName) {
        if(window.confirm(`${person.name} has already been added to the phonebook. replace the old number with the new one?`)) {
          let temp = {
            name: person.name,
            number: newNumber,
            id: person.id
          }
          console.log(temp);
          recordService.update(person.id, temp).then(response => {
            setErrorMessage(`${person.name} has been updated!`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          }).catch(error => {
            setErrorMessage(`${person.name} has already been removed from server!`)
            rem=true;
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
          if(!rem) {
            setPersonsToShow(personsToShow.map(per => per.id !== temp.id ? per : temp))
          }
        }
        flag = true;
      }
    });
    if (flag === false) {
      let temp = {
        name: newName,
        number: newNumber
      };
      recordService.create(temp).then(response => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
        setPersonsToShow(persons.concat(response));

        setErrorMessage(`${temp.name} has been added!`)
        setTimeout(()=>{
          setErrorMessage(null)
        }, 3000)
      }).catch(error => {
        console.log(error.response.data);
        setErrorMessage(error.response.data);
        setTimeout(()=>{
          setErrorMessage(null)
        }, 3000)
      })
    }
  };

  const deleteName = (id, name) => {
    if(window.confirm(`Are you sure you want to delete ${name} ?`)) {
      recordService.deleteOne(id).then(response => {
        setPersonsToShow(personsToShow.filter(per => per.name !== name))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter persons={persons} setPersonsToShow={setPersonsToShow} />
      <h2>add a new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        addNewName={addNewName}
      />
      <h2>Numbers</h2>
      <ol>
        {personsToShow.map((per) => (
          <Details name={per.name} number={per.number} id={per.id} deleteName={deleteName} />
        ))}
      </ol>
    </div>
  );
};

export default App;
