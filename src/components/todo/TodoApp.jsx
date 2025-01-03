import './todo.css'
import TodoData from './TodoData.jsx'
import TodoNew from './TodoNew.jsx'
import reactLogo from './../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching Youtube" }
    ])

    // const studyReact = "Vinh";
    // const age = 26;
    // const data = {
    //   address: "HCM",
    //   country: "VietNam"
    // }

    const addNewToDo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 100000),
            name: name
        }

        setTodoList([...todoList, newTodo]);
    }

    const deleteToDoById = (id) => {
        setTodoList(todoList.filter(x => x.id !== id));
    }

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewToDo={addNewToDo}
            />
            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteToDoById={deleteToDoById}
                />
                :
                <div className='todo-image'>
                    <img src={reactLogo} className='logo' />
                </div>
            }
        </div>
    )
}

export default TodoApp;