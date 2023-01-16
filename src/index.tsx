import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={['lg', 'md', 'sm']}
      minBreakpoint='sm'
    >
      <Router/>
    </ThemeProvider>
  </React.StrictMode>
);
