const TodoData = (props) => {
    // props là 1 object {}
    // {
    //     name: "Vinh",
    //     age: 26,
    //     data: {}
    // }
    //const { mame, ...test } = props;
    const { name, age, data, todoList } = props;

    console.log("check props: ", props);

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("check map", item, index)
                return (
                    <div className="todo-item">
                        <div>
                            {item.name}
                        </div>
                        <button
                            style={{ cursor: "pointer" }}
                        >Delete</button>
                    </div>
                )
            })}

            <div>
                {JSON.stringify(todoList)}
            </div>
        </div >
    );
}

export default TodoData;