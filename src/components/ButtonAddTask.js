/* import React, { Component } from 'react';

class Button extends Component{
    render(){

        let contadorTareas = 0;
        let contadorTareasPorHacer = 0;

        function addTodo() {
           // alert('Boton Add TODO clickeado!')
            let nombreTarea = prompt('Please, add the task!')
          
            if (nombreTarea) {
              const todo = createTarea(nombreTarea)
              contadorTareas++
              contadorTareasPorHacer++
              //list.appendChild(todo)
              //renderizaContadores()
            }
        }

        function cambioCheckbox() {
            if (this.checked)
              contadorTareasPorHacer--
            else
              contadorTareasPorHacer++
          
           // renderizaContadores()
          }
          
        function createTarea(nombreTarea) {
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.onchange = cambioCheckbox
          
            const span = document.createElement('span')
            span.innerHTML = nombreTarea
          
            const eliminar = document.createElement('button')
            eliminar.innerHTML = 'X'
            eliminar.onclick = eliminarTodo
          
            const li = document.createElement('li')
          
            li.appendChild(checkbox)
            li.appendChild(span)
            li.appendChild(eliminar)
          
            console.log(li);
          
            return li
          
          
        }
          
          
    
    return(
        <button class="button center" onClick={addTodo} >Add Task</button>
    ) 
    }
    
}
export default Button;
     */