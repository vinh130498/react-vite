const TodoData = (props) => {
    // props là 1 object {}
    // {
    //     name: "Vinh",
    //     age: 26,
    //     data: {}
    // }
    //const { mame, ...test } = props;
    const { name, age, data } = props;

    console.log("check props: ", props);

    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    );
}

export default TodoData;