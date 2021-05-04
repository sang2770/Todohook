import React , {useState}from 'react'
import Todo from './todo'
import Form from './form'
function Todolist() {
    const [todos, setTodos]=useState([]);
    // add
    const add=(todo)=>{
        const NewTodo=[todo, ...todos];
        setTodos(NewTodo);
    }
    // Delete
    const Remove=(id)=>{
        const NewTodo=[...todos].filter((item, index)=>{
            return item.id!=id;
        })
        setTodos(NewTodo);
    }
    // update
    const Update=(id, value)=>{
        let NewTodo=[...todos].map((item, index)=>{
            if(item.id===id)
            {
                item.text=value;
            }
            return item;
        })
        console.log(NewTodo);
        setTodos(NewTodo);
    }
    // Complete
    const Complete=(id)=>{
        let NewTodo=[...todos].map((item, index)=>{
            if(item.id===id)
            {
                item.isComplete=!item.isComplete;
            }
            return item;
        })
        setTodos(NewTodo);
    }
    return (
        <div className="Todo-list">
            <div className="Constain">
                <h1 className="Title">What's the plan of you Today</h1>
                <Form submit={add} className="Control"/>
                <Todo todo={todos} remove={Remove} update={Update}  Complete={Complete}/>
            </div>
            
        </div>
    )
}

export default Todolist
