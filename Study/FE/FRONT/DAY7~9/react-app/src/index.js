import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 추가
import reportWebVitals from './reportWebVitals';
import Librarypage from './pages/sample/LibrayPage';
import ButtonPage from './pages/material/ButtonPage';
// import CommentPage from './pages/sample/CommentPage';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// import CapacityPage from './pages/reactive/CapacityPage'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <App />
//   //<ButtonPage />
//   //<CommentPage />
//   <CapacityPage />
// );

// import { CommentPage as Application } from './pages/sample/CommentPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Application />
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <App />
//   //<ButtonPage />
//   <CommentPage />
// );


// 트러블 슈팅 일어났음 
// import EventPage from './pages/event/EventPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <EventPage />
// );

// import TestRouterApp from './TestRouterApp';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <TestRouterApp />
// );

// import RenderingPage from './pages/rendering/RenderingPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <RenderingPage />
// );

import ToyApp from './ToyApp'; // Import ToyApp
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ToyApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
