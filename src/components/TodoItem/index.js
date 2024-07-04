import {MdEdit} from 'react-icons/md'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, changeTodoTitle, toggleComplete} = props
  const {id, title, complete} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onClickEdit = () => {
    const text = prompt('Edit Todo', title)
    changeTodoTitle(id, text)
  }

  const markCompletion = () => {
    toggleComplete(id)
  }

  const cont = complete ? 'completed-cont' : 'todo-item'

  return (
    <li className={cont}>
      <p className="title" onClick={markCompletion}>
        {title}
      </p>
      <div className="btn-cont">
        <MdEdit className="icon" onClick={onClickEdit} />
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
