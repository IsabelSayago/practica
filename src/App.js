import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/ButtonAddTask.js';
import Counters from './components/Counters.js';
import List from './components/List.js';

function Tarea(props) {

  const [check,checkEs] = useState(props.check)

  return <li>
  {props.title} <input type="checkbox" checked={check} onChange={() => checkEs(!check)}></input> 

  </li>
}

function App(props) {

  const [check, incrementCheck] = useState(0);
  const [unCheck, incrementUncheck] = useState(0);
  const [arrayL, arraList] = useState([]);


  function addTodo() {
    let nombreTarea = prompt('Please, add the task!')

    if (nombreTarea) {
      incrementCheck(check + 1);
      incrementUncheck(unCheck + 1);
      arrayL.push({title:nombreTarea, check: true})
      

      
      arraList(arrayL)

      //list.appendChild(todo)
      //renderizaContadores()
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        {/* <div class="container center">
          <h1 class="center title">Doo</h1>
          <Counters />
          <Button />
          <List />
        </div> */}
        <div className="container center">
          <h1 className="center title">TODO App</h1>
          <div className="flow-right controls">
            <span>Item count: <span id="item-count">{check}</span></span>
            <span>Unchecked count: <span id="unchecked-count">{unCheck}</span></span>
          </div>
          <button className="button center" onClick={addTodo}>Agregar Tarea</button>
          <ul id="todo-list" className="todo-list">
            {
              arrayL.map((obj,index) => <Tarea title= {obj.title} check= {obj.check} key={index}/>)

            }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
