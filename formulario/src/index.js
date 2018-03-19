// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
 
// assets
import './index.css';

// Routes
import AppRoutes from './routes';
// Components
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <AppRoutes />
    </Router>,
     document.getElementById('root'));
registerServiceWorker();
