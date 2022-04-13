import "./assets/css/tailwind.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import Master from "./layout/Master";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Master>
        <Home/>
    </Master>
  </React.StrictMode>
);