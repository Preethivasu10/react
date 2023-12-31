import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/task9/task9'; 
import FeedbackForm from './components/task10/task10'; 

import Home from './components/home/home';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   { <App/>}
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();