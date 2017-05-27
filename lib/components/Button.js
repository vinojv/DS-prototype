import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Button.css';
export default class Button extends Component {
    constructor () {
        super();
    }

    render () {
        return <button className={styles.c1}>CLICK ME</button>;
    }
}