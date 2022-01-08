import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import Componentclass from './components/Componentclass';
import UnionBank from './components/UnionBank';
import Stateclass from './Stateclass';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Functional/>
    <Componentclass/>
    <UnionBank/>
    <Stateclass/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
