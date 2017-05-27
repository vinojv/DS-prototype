import * as React from "react";
import { render } from "react-dom";

const App = ()=><div>{"Hello"}</div>;

render (<App/>, document.getElementById('root'));


if (module.hot) {
    module.hot.accept();
}