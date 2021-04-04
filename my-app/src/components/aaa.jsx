import React from 'react';

// const Alert = ({ name }) => {
//   console.log(name);
//   return <li>{name}</li>;
// };

const Alert = ({ todos, onDeleteTodo }) => {
  // console.log(todos);
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, number }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">
            {text} : {number}
          </p>
          <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default Alert;
