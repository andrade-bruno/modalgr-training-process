import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import "react-activity/dist/library.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSearch, faArrowRight, faTrash, faPencil, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'

import App from './App';

library.add(fab, faCheckSquare, faSearch, faArrowRight, faTrash, faPencil, faUser, faSignOut)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
