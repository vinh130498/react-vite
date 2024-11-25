import { useState } from "react";

const TodoNew = (props) => {

    // userState hook (getter/setter)
    // const valueInput = "Vinh";
    const [valueInput, setValueInput] = useState("Vinh")
    const { addNewToDo } = props;

    // addNewToDo("Vinh") // fire
    const handleClickAdd = () => {
        addNewToDo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input
                type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClickAdd}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;