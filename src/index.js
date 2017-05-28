import * as React from "react";
import { render } from "react-dom";
import './global.css';

const App = () => <div>HELLO</div>;

render(<App/>, document.getElementById('root'));


if (module.hot) {
    module.hot.accept();
}