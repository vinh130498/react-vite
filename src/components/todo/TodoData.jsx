import { useState } from "react";

const TodoData = (props) => {
    // props là 1 object {}
    // {
    //     name: "Vinh",
    //     age: 26,
    //     data: {}
    // }
    // const { name, ...test } = props;
    // const { name, age, data, todoList } = props;
    const { todoList, deleteToDoById } = props;
    console.log("todoList ", todoList);

    const handleClickDelete = (id) => {
        deleteToDoById(id);
    }

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => { handleClickDelete(item.id) }}
                        >Delete</button>
                    </div>
                )
            })}
        </div >
    );
}

export default TodoData;