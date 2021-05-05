import React from 'react'

const Incompletetodos = ( props ) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <>
      <div className="incomplete_area">
        <p>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list_row">
                <div>{todo}</div>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Incompletetodos
