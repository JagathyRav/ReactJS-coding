// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-list-item">
      <p className="title">{title}</p>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
