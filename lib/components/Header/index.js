import React, { Component } from 'react';
import * as Styles from './header.css';

export default class Header extends Component {
    render () {
        return (<div>
            <div styleName="primary-title"></div>
            <div styleName="secondary-title"></div>
        </div>);
    }
}