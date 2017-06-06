/**
 * Created by mahesh on 6/2/17.
 */
import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';

const Anchor = ({children='', className={}, type='', style={}}) =>(
    <a styleName={'default ' + type}
       className={classnames(className)}
       style={style}>{children}</a>
);

const AnchorComponent = Anchor;

export default AnchorComponent;
export {};
