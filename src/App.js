import React,{useCallback, useRef, useState} from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([ //초기값 지정
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원하기',
      checked: false,
    }
  ]);

  const nextId = useRef(4); //ref를 사용해서 변수 담기

  const onInsert = useCallback( value => {
    const todo ={
      id: nextId.current,
      text: value,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current +=1;
  },[todos]);

  const onToggle = useCallback( (id) => {
    setTodos(todos.map( todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  },[todos]);

  const onRemove = useCallback( id => {
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);

  return (
    <>
    <div>Todo App 만들기</div>
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
    </>
  );
}

export default App;
