import './components/todo/todo.css'
import TodoData from './components/todo/TodoData.jsx'
import TodoNew from './components/todo/TodoNew.jsx'
import reactLogo from './assets/react.svg'

const App = () => {

  const studyReact = "Vinh";
  const age = 26;
  const data = {
    address: "HCM",
    country: "VietNam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={studyReact}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
