import React, {useState } from 'react'
import FormTodo from './FormTodo'
import Todo from './Todo'
function Todolist() {
    const [todos, settodos] = useState([]);
    // add
    const addTodo=todo=>{
        if(todo.text ==="")
        {
            return
        }
        const newTodos=[todo, ...todos];  // Them vao dau danh sach
        settodos(newTodos);

    }
    // update
    const updateTodo=(todoId, newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
          }
        settodos(prev=>{
            return  prev.map(item=>{
                return (item.id===todoId ? newValue : item);
            })
        })
    }    
    // Remove
    const removeTodo=(id)=>{
        const newTodo=[...todos].filter(item=>{
           return  item.id!==id
        })
        settodos(newTodo);
    }
    // Complete
    const completeTodo=(id)=>{
        let NewComplete=todos.map(item=>{
            if(item.id===id)
            {
                item.isComplete= !item.isComplete;
            }
            return item;
        })
        settodos(NewComplete)
    }
    return (
        <div>
            <h1 className="Title">
                What is the plan for Today ?
            </h1>
            <FormTodo onsubmit ={addTodo}/>
            <Todo
                todos={todos}
                completeToto={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default Todolist
