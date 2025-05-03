import React from "react";
import { useState } from "react"
import Chat from "./Chat"
import Countries from "./Contries";
import TodoApp from "./TodoApp";
import ThemeToggle from "./Theme";
import Counter from "./counter";
import StringTrainer from "./experiment";
function App() {

  const [page, setPage] = useState('counter');
  return (
    <div className="App">
      <div style={{padding: 20}}>
        <div>
          <h1>React tools</h1>
          <StringTrainer/>
        </div>
        <nav>
          <button onClick={() => setPage("chat")}> Çat</button>
          <button onClick={() => setPage("countries")}> Ýurtlar</button>
          <button onClick={() => setPage("todo")}>Todo List</button>
          <button onClick={() => setPage("theme")}>TEMA</button>
          <button onClick={() => setPage('counter')}>Counter</button>

        </nav>
        {page === 'theme' && <ThemeToggle/>}
        {page === 'chat' && <Chat />}
        {page === 'countries' && <Countries />}
        {page === 'todo' && <TodoApp/>}
        {page === 'counter' && <Counter/>}
      </div>
    </div>
  );
}

export default App;
