import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';

type Props = {
  value: any;
  onIncrement: () => void; // Type은 함수이고 리턴값은 void
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) { // props로 내려줌 / Typescript(Props)
  // value는 실제로 사용되지 않고 대신 counter 값을 직접 컴포넌트 내에서 가져와 사용

  const dispatch = useDispatch(); // store에 action을 보내기 위해 dispatch함수를 가져옴

  // useSelector로 state 값(count, todos) 가져옴
  const counter = useSelector((state: RootState) => state.counter); // state 객체 내 counter값(클릭횟수) 가져오기
  const todos: string[] = useSelector((state: RootState) => state.todos);// state 객체 내 todos값(할일목록 배열) 가져오기
  
  // form 입력 이벤트 관리
  const [todoValue, setTodoValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value); // 폼 입력상태 업데이트
  }

  // form 제출 이벤트 관리
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 웹페이지 새로고침 방지
    dispatch({ type: "ADD_TODO", text: todoValue}) // action을 dispatch를 통해 내보냄
    setTodoValue(''); // 제출 후 입력값 초기화
  }
  
  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>

      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type='text' value={todoValue} onChange={handleChange} />
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
