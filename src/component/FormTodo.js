import React, {useState} from 'react'

function FormTodo(props) {
    const [input, setinput]=useState(props.edit ? props.edit.value : '');
    const handeChange=(e)=>
    {
        setinput(e.target.value);
    }
    const handeSubmit=(e)=>{
        e.preventDefault();
        props.onsubmit({
            id:Math.floor(Math.random()* 20),
            text:input
        })
        setinput('');
    }
    return (
        <div>
            <form onSubmit={handeSubmit} className="Todo-Form">
                {
                    props.edit? (
                        <div>
                            <input
                            placeholder='Update your item'
                            value={input}
                            onChange={handeChange}
                            name="text"
                            className="Todo-input edit"
                            />
                            <button onClick={handeSubmit} className="Todo-button edit">
                                Update
                            </button>
                        </div>
                    )
                    :
                    (
                        <div>
                            <input
                            placeholder='Add a todo'
                            value={input}
                            onChange={handeChange}
                            name="text"
                            className="Todo-input "
                            />
                            <button onClick={handeSubmit} className="Todo-button">
                                Add Todo
                            </button>
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default FormTodo
