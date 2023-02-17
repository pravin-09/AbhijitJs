import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App';
import Incdec from './IncDec';
import ReadInput from './ReadInput';



const arr=["lilly","rose","sunflower","rose","hibsics","lilly"];
// filter
const p=arr.filter(fruit=> fruit =='lilly')
// find
const p1=arr.find(fruit=> fruit =='lilly')

// For
const colors=["orange","yellow","red","green"];
// const unique=(array)=> (
//   array.filter((currval,index,arr)=> (
//     arr.indexOf(currval)==index
//   ))
// );
// unique(colors);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ReadInput/>
  </div>
);
// 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

reportWebVitals();
