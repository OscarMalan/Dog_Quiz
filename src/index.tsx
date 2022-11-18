import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Leaderboard from './Leaderboard';
import Error from './Error';
import Navbar from './Navbar';
import Admin from './Admin';
import BeginTest from './Begin_Test';
import Test from './Test';
import Results from './Results';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import './reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Navbar is here as it shouold be available on every page */}
      <Navbar />
        <Routes>
          {/* path is the /xxx in the URL, the * that Error has means that any page that isn't listed will link to here */}
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route path='begin_test' element={<BeginTest />} />
            <Route path='leaderboard' element={<Leaderboard />} />
            <Route path='test' element={<Test />} />
            <Route path='results' element={<Results />} />
            <Route path='admin' element={<Admin />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();