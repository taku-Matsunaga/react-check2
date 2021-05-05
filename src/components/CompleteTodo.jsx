import React from 'react'

const Completetodo = (props) => {
  const { todos, onClickBack } = props;

  return (
    <>
      <div>
        <p>完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                <div>{todo}</div>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Completetodo
