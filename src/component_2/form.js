import React, {useState} from 'react'
function Form(props) {
    const [input,setInput]=useState(props.text);
    const change=(e)=>{
        setInput(e.target.value);
        console.log(e.target.value);
    }
    const Submit=()=>{
        props.submit({
            id:Math.floor(Math.random()*10),
            text:input
        })
        console.log(input);
        setInput('');
    }
    const Update=()=>{
        props.submit({
            id:props.edit,
            text:input
        })
        setInput('');
    }
    if(props.edit==null)
        return (
            <div className={props.className}>
                    <input type="text" placeholder="Add a Todo" value={input} className="Todo_form" onChange={change}/>
                    <button className="Todo_btn" onClick={(props.edit)?Update:Submit}>Add</button>
            </div>
        )
    else
    {
        return (
            <div className={props.className}>
                    <input type="text" placeholder="Update" value={input}  className="Todo_form" onChange={change}/>
                    <button className="Todo_btn btn_update" onClick={(props.edit)?Update:Submit}>Update</button>
            </div>
        )
    }
}

export default Form
