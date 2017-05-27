import React, { Component } from 'react';
import * as Styles from './header.css';

export default class Header extends Component {
    render () {
        return (<div>
            <div className="primary-title"></div>
            <div className="secondary-title"></div>
        </div>);
    }
}