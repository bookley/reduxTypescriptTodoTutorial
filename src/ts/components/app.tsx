import * as React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/footer'

const App = () => (
  <div>
    <h1>To Do List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer/>
  </div>
)

export default App