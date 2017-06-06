/**
 * Created by mahesh on 6/5/17.
 */
import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ULComponent = ({children = '', className, type,  style}) =>(
    <ul className={classnames(className)}
        style={style}
        styleName={'default ' + type}>{children}</ul>
);

ULComponent.propTypes = {
    style:PropTypes.any,
    type: PropTypes.string,
    className:PropTypes.any,
};
ULComponent.defaultProps = {
    style:{},
    type: '',
    className:{},
};

export default ULComponent;
export {};
