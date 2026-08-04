import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Librarypage from './pages/sample/LibrayPage';
import ButtonPage from './pages/material/ButtonPage';
import CommentPage from './pages/sample/CommentPage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import CapacityPage from './pages/reactive/CapacityPage'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  //<ButtonPage />
  //<CommentPage />
  <CapacityPage />
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <App />
//   //<ButtonPage />
//   <CommentPage />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
