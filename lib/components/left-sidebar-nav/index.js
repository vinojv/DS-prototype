import React, { Component } from 'react';
import * as styles from './style.css';

export default class Nav extends Component {
    static defaultProps = {
        links: [],
    };

    render () {
        const { links } = this.props;
        return (<div styleName="side-nav">
            <nav styleName="nav">
                {links.map(({ link, style }) => <a href={link} className={style} key={link}></a>)}
                {this.props.children}
            </nav>
        </div>);
    }
}