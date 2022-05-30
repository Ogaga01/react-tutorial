import React from "react"
class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.todos.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}
export default TodoContainer