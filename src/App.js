import React from "react";
import AddTodo from './Components/AddTodo/addTodo'
import TodoList from './Components/TodoList/Todolist.js'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
