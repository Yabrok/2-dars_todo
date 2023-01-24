export const Item = ({id, text, isCompleated, todos, setTodos}) => {
  function handleChange(todoId){
    const findedTodo = todos.find(item => item.id == todoId);
    findedTodo.isCompleated = !findedTodo.isCompleated
    setTodos([...todos])
  }

  function handleEdit(todoId, text){
    const newText = prompt('Edit todo:',text)
    const findedTodo = todos.find(item => item.id == todoId);
    findedTodo.text = newText;
    setTodos([...todos])
  }

  function handleDelete(todoId){
    const findedTodo = todos.filter(item => item.id !== todoId);
    setTodos(findedTodo);
  }
  return (
    <li className='list-group-item d-flex align-items-center'>
      <input 
      onChange={() => handleChange(id)}
      className="me-4"
      checked = {isCompleated}
      type="checkbox" />
      <span className={isCompleated ? 'text-decoration-line-through && text-success' : ''} >{text}</span>
      <div className='ms-auto'>
        <button onClick={() => handleEdit(id,text)} className='btn btn-warning me-1' type='button'>Edit</button>
        <button onClick={() => handleDelete(id)} className='btn btn-danger' type='button'>Delete</button>
      </div>
    </li>
  )
}
