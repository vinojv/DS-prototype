import React, { Component } from 'react';
import * as styles from './style.css';

export default class Nav extends Component {
    render () {
        return (<div styleName="legend">
            {this.props.children}
        </div>);
    }
}