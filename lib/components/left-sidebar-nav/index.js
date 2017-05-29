import React, { Component } from 'react';
import classNames from 'classnames';
import * as styles from './style.css';

export default class Nav extends Component {
    static defaultProps = {
        links: [],
    };

    render () {
        const { links } = this.props;
        return (<div styleName="side-nav">
            <nav styleName="nav">
                {links.map(({ link, style, label }) => <a href={link}
                                                          className={style}
                                                          styleName="nav__link"
                                                          key={link}> {label || ''} </a>)}
                {React.Children.map(this.props.children, (child, i) => {
                    console.log(child.props);
                    return React.cloneElement(child, {
                        className: classNames(styles["nav__link"], child.props.className),
                    });
                })
                }
            </nav>
        </div>);
    }
}