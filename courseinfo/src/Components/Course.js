import React from "react";

const Header = ({ name }) => (
  <>
    <h1>{name}</h1>
  </>
);

const Part = ({ name, exercises }) => {
    return (
        <>
          <p>
            {name} {exercises}
          </p>
        </>
    )
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </>
  );
};

const Total = ({parts}) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0);
    return (
        <>
          <strong>
            Total of {sum} exercises
          </strong>
        </>
    )
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;