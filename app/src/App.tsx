import React from 'react';
import HorosList from './components/horosList';
import TodoList from './components/todoList';
import UserList from './components/userList';

function App() {
  return (
    <div className="App">
      < UserList />
       <hr/>
      <TodoList />
      <hr />
      <HorosList />
    </div>
  );
}

export default App;
