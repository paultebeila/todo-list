import "../css/form.css"
import React from "react";

const Form = ({plan, todo, setTodo, setPlan}) =>{

    const planHandler = (e) => {
        console.log(e.target.value);
        setPlan(e.target.value);
    };
    const submitPlanHandler = (e) => {
        e.preventDefault();
        setTodo([
            ...todo,
            { text: plan, completed: false, id: Math.random() * 20 }
        ]);
        setPlan("");
    };
    return(
        <form>
            <input value={plan} onChange={planHandler} type="text" className="todo-input" />

            <div className="select">
                <select name="todo" className="filter">
                    <option value="high">High</option>
                    <option value="medium">medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <button onClick={submitPlanHandler} className="btn" type="submit">Add</button>
        </form>
    )
}

export default Form;