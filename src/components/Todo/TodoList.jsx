// sukurti componenta
// div, input, button, ul > li
// arr = [{ id: 1, title: 'buy milk'}]

import { useState } from 'react';

const initTodos = [
  { id: '1', title: 'Buy milk', isDone: false },
  { id: '2', title: 'Go to Mall', isDone: true },
  { id: '234', title: 'Learn React', isDone: true },
  { id: '435345', title: 'Watch tv', isDone: false },
];
const poPaspaudimoAndMall = [
  { id: '1', title: 'Buy milk', isDone: false },
  { id: '2', title: 'Go to Mall', isDone: false },
  { id: '234', title: 'Learn React', isDone: true },
  { id: '435345', title: 'Watch tv', isDone: false },
];

function TodoList() {
  //
  const [mainTodoArr, setMainTodoArr] = useState(initTodos);
  const [newTodoValue, setNewTodoValue] = useState('');

  function handleNewTodoInput(e) {
    setNewTodoValue(e.target.value);
  }

  function addTodo() {
    // sugeneruoti naujo todo objekta
    const newTodoObj = {
      id: Math.random().toString().slice(2),
      title: newTodoValue,
      isDone: false,
    };
    console.log('newTodoObj ===', newTodoObj);
    // prideti prie esamo state
    // setMainTodoArr(paduoti masyva kaip noriu kad atrodyti po pakeitimo, nemutuojam esamo mainTodoArr)
    const stateCopyWithNewTodo = [...mainTodoArr, newTodoObj];

    // atnaujinti state
    setMainTodoArr((prevMainTodoArr) => [...prevMainTodoArr, newTodoObj]);
  }

  function deleteTodo(idOfTodoToDelete) {
    // setMainTodoArr(paduoti masyvo kopija kurioje nera elemento kurio id idOfTodoToDelete)
    // p.s. filter()
  }
  function toggleTodo(idOfTodoToToggle) {
    // setMainTodoArr(paduoti nemodifikuota mainTodoArr versija kurioje objektas kurio
    // id yra idOfTodoToToggle, jo isDone boolean reiksme pavarsta i priesinga )
    console.log('toggleTodo ===', idOfTodoToToggle);
    const pakeistasMainArr = mainTodoArr.map((tObj) => {
      if (tObj.id === idOfTodoToToggle) {
        return { ...tObj, isDone: !tObj.isDone };
        // tObj.isDone = !tObj.isDone;
        // return tObj;
      } else {
        return tObj;
      }
    });
    console.log('pakeistasMainArr ===', pakeistasMainArr);
    setMainTodoArr(pakeistasMainArr);
    console.log('initTodos ===', initTodos);
  }

  return (
    <div>
      <h3>TodoList</h3>
      <fieldset>
        <legend>Add todo</legend>
        <input
          value={newTodoValue}
          onChange={handleNewTodoInput}
          type='text'
          placeholder='What todo'
        />
        <button onClick={addTodo}>Add</button>
      </fieldset>

      <ul className='todos'>
        {mainTodoArr.map((tObj) => (
          <li key={tObj.id} className={tObj.isDone && 'done'}>
            {tObj.title}{' '}
            <button onClick={() => toggleTodo(tObj.id)}>{tObj.isDone && 'un'}done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

// kai generuojam  <li key={tObj.id}>{tObj.title}</li>
// jei jis yra done, tai pridedam klase, kuri ji perbraukia ir padaro pilku
