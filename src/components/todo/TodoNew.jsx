import { useState } from "react";

const TodoNew = (props) => {
    // userState hook (getter/setter)
    // const valueInput = "Vinh";
    const [valueInput, setValueInput] = useState("Vinh")
    const { addNewToDo } = props;

    // addNewToDo("Vinh")
    const handleClick = () => {
        console.log("check valueInput", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;