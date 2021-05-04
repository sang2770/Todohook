import React, {useState} from 'react'
import Form from './form'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
function Todo({todo, remove, update, Complete}) {
    const [edit, setEdit]=useState({
        id:null,
        text:''
    });
    const changeComplete=(id)=>{
        Complete(id);
    }
    const changeUpdate=(item)=>
    {
        update(item.id, item.text);
        setEdit({
            id:null,
            text:''
        })
    }
    if(edit.id!=null)
    {
        return <Form  className="Todo-update" submit={changeUpdate} edit={edit.id} text={edit.text}/>
    }
    return todo.map((item, index)=>{
        return (
            <div key={index}  className={item.isComplete?"Todo_item complete":"Todo_item uncomplete"} >
                <h2 className="Todo_item_content"  onClick={changeComplete.bind(this, item.id)}>{item.text}</h2>
                <div className='icons'>
                    <RiCloseCircleLine
                    onClick={() => remove(item.id)}
                    className='delete-icon'
                    />
                    <TiEdit
                    onClick={() => setEdit({ id: item.id, text: item.text })}
                    className='edit-icon'
                    />
                </div>
            </div>
        )
    })
}

export default Todo
