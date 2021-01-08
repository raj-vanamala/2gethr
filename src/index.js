import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import { store } from './ReduxStore/store'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
