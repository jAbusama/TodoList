import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  itemStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todosItem.completed ? 'line-through' : 'none'
    }
  }
  markComplete = e => {
    console.log()
  }
  remove = e => {
    console.log('hello')
  }
  render() {
    const { id, title } = this.props.todosItem
    return (
      <div style={this.itemStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button
            style={buttonXStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    )
  }
}
const buttonXStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }
TodoItem.proptype = {
  todosItem: PropTypes.object.isRequired
}
export default TodoItem
