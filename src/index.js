import * as React from "react";
import { render } from "react-dom";
import './global.css';
import App from './app/App.js';

render(<App/>, document.getElementById('root'));


if (module.hot) {
    module.hot.accept();
}