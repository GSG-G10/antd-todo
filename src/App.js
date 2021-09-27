import React from 'react';
import Form from "./form";
import "./App.css";
import 'antd/dist/antd.css';
import { useState } from 'react';


import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
function App(){
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
        k === i
            ? {
              ...todo,
                complete: !todo.complete
              }
              : todo
            )
    );  
    
    return (

      <>
      <Layout>
        <Header>Header</Header>
      <Content>
    <div className="App">
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
        />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
          key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
            >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
         </Content>
        <Footer></Footer>
      </Layout>
  
      </>
);
};
export default App;







