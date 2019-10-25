import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
class Todos extends Component {
  // markComplete = id => {
  //   console.log(this.props.markComplete)
  // }
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todosItem={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ))
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
  // markComplete: PropTypes.number.isRequired,
  // delTodo: PropTypes.number.isRequired
}
export default Todos
