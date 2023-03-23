// sukurti componenta
// div, input, button, ul > li
// arr = [{ id: 1, title: 'buy milk'}]

import { useState } from 'react';

const initTodos = [
  { id: '1', title: 'buy milk', isDone: false },
  { id: '12', title: 'Go to Mall', isDone: false },
  { id: '234', title: 'Lear React', isDone: true },
  { id: '435345', title: 'Watch tv', isDone: false },
];

function TodoList() {
  const [mainTodoArr, setMainTodoArr] = useState(initTodos);
  return (
    <div>
      <h3>TodoList</h3>
      <fieldset>
        <legend>Add todo</legend>
        <input type='text' placeholder='What todo' />
        <button>Add</button>
      </fieldset>

      <ul className='todos'>
        {mainTodoArr.map((tObj) => (
          <li>Buy milk</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
