import React, { Component } from 'react'

export class addTodo extends Component {
  state = {
    title: '',
    username: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Title...'
          style={{ flex: '5', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='text'
          name='username'
          placeholder='Username...'
          style={{ flex: '5', padding: '5px' }}
          value={this.state.username}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Add Todo'
          className='btnAdd'
          style={{ flex: '2' }}
        />
      </form>
    )
  }
}

export default addTodo
