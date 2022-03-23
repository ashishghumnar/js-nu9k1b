// Import stylesheets
import './style.css';
import React from 'react';
import { render } from 'react-dom';

import ToDo from './ToDo/index';

console.log(ToDo);

// Write Javascript code!
const appDiv = document.getElementById('app');


render(<ToDo />, appDiv);
