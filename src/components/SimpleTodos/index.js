import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const SimpleTodos = () => {
  const [todosList, setTodosList] = useState([])
  const [title, setTitle] = useState([])

  const changeInput = event => {
    setTitle(event.target.value)
  }

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title,
      complete: false,
    }

    setTodosList([...todosList, newTodo])
    setTitle('')
  }

  const deleteTodo = id => {
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    setTodosList(updatedTodosList)
  }

  const changeTodoTitle = (id, todo) => {
    setTodosList(
      todosList.map(each => (each.id === id ? {...each, title: todo} : each)),
    )
    setTitle('')
  }

  const toggleComplete = id => {
    setTodosList(
      todosList.map(todo =>
        todo.id === id ? {...todo, complete: !todo.complete} : todo,
      ),
    )
  }

  return (
    <div className="app-container">
      <div className="simple-todos-container">
        <h1 className="heading">Simple Todos</h1>
        <div className="input-cont">
          <input
            type="text"
            className="input"
            onChange={changeInput}
            value={title}
            placeholder="Enter Task to be completed"
          />
          <button type="button" className="add-btn" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul className="todos-list">
          {todosList.map(eachTodo => (
            <TodoItem
              key={eachTodo.id}
              todoDetails={eachTodo}
              deleteTodo={deleteTodo}
              changeTodoTitle={changeTodoTitle}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SimpleTodos
