import React from 'react';
import App from './App';
import { ResultContextProvider } from './context/ResultContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ResultContextProvider>
                 <Router><App /></Router>
            </ResultContextProvider>);