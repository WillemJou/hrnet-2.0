import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { CreateEmployeePage } from './pages/createEmployeePage';
import { CurrentEmployeesPage } from './pages/currentEmployeesPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     < BrowserRouter>
    <Routes>
    <Route path="/" element={<CreateEmployeePage   />}>
</Route>
<Route path="/current-employees" element={<CurrentEmployeesPage />}>
</Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
