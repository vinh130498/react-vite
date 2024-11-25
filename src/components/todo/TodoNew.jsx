const TodoNew = (props) => {
    console.log("check point: ", props);
    const { addNewToDo } = props;

    // addNewToDo("Vinh")
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log("handle on change", name)
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
        </div>
    );
}

export default TodoNew;