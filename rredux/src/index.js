import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';



import './main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function playList(state = []. action) {
  if (action.type === 'ADD-TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = configureStore(playList)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
