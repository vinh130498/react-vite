const TodoData = (props) => {
    // props là 1 object {}
    // {
    //     name: "Vinh",
    //     age: 26,
    //     data: {}
    // }
    // const { name, ...test } = props;
    // const { name, age, data, todoList } = props;
    const { todoList } = props;

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("check map", item, index)
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button
                            style={{ cursor: "pointer" }}
                        >Delete</button>
                    </div>
                )
            })}
        </div >
    );
}

export default TodoData;