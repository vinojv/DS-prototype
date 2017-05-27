import React, { Component } from 'react';
import * as styles from './style.css';

export default class layout extends Component {
    constructor () {
        super();
    }

    render () {
        return <div styleName = "page-wrap">
            {this.props.children}
        </div>;
    }
}