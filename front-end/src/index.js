import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider } from 'react-router-dom';
import { Router } from './rotas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);
  