import React, { Component } from 'react'
import todo from './todo.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      word:'THIS IS WORD STATE',
      todo: []
    }

    this.getData=this.getData.bind(this)
  }

  componentDidMount(){
    console.log(todo);
    this.getData()
  }

  getData(){
    setTimeout(()=>{
      this.setState({
        todo: todo
      })
    },1000)
  }

  render() {
    const tableRow =todo.map(todo => (<tr>
            <td>{todo.name}</td>
            <td>{todo.dueDate}</td>
            <td>{todo.grade}</td>
          </tr>))
    return (
      <table>
        <tbody>
          {tableRow}
        </tbody>
      </table>
    )
  }
}

export default App