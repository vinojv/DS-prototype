/**
 * Created by mahesh on 6/2/17.
 */
import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const AnchorComponent = ({children='', className, type, style,  href}) =>(
    <a styleName={'default ' + type}
       href={href}
       className={classnames(className)}
       style={style}>{children}</a>
);

AnchorComponent.propTypes = {
    className: PropTypes.any,
    type:PropTypes.string,
    style: PropTypes.any,
    href: PropTypes.any,
};

AnchorComponent.defaultProps = {
    className: {},
    type: '',
    style: {},
    href: '',
};

export default AnchorComponent;
export {};
