import React from "react";
import { createRoot } from 'react-dom/client';
import  ReactDOM  from "react";
import App from './App'

const conatiner = document.getElementById('root');
const root = createRoot(conatiner);
root.render(<App/>);