
import React from 'react';
import ToDoList from './components/ToDoList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import ToDoContextProvider from './contexts/ToDoContext';
import NewToDoForm from './components/NewToDoForm';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <ToDoContextProvider>
            <ToDoList />
            <NewToDoForm />
          </ToDoContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
