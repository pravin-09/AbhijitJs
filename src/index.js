import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const pra="Pravin";

const arr=["apple"," mango"];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1>HEllO</h1>
  {pra}
  {arr.indexOf("mango")};
  
  </div>
);


reportWebVitals();
