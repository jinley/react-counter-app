import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux'; // redux toolkit을 쓰지 않기 때문에 나온 밑줄
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer); // store 생성, combineReducers로 묶인 rootReducer로 생성


const render = () => root.render( // root.render를 render라는 함수로 만듦
  <React.StrictMode>
    <Provider store={store}> 
      <App // app component에 props 내려주기
        // getState: state의 최신 상태 가져옴
        value={store.getState()} 
        onIncrement={()=> store.dispatch({type: "INCREMENT"})} // store에 dispatch로 action을 보냄. 
        onDecrement={()=> store.dispatch({type: "DECREMENT"})}
        // store.dispatch(action)
        // dispatch(action) -> reducer -> store
      />
    </Provider>
  </React.StrictMode>
);

render(); // render함수 호출

// subscribe: 상태 변화를 감지하여 store 업데이트 시마다 콜백 함수 호출 => 상태 변화 시마다 UI 업데이트
store.subscribe(render); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
