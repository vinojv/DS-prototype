/**
 * Created by mahesh on 6/5/17.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const UL_01 = ({children='', className='', style={}}) =>(
    <ul style={style} styleName={'default'}>{children}</ul>
);

const ULComponent = CSSModules( UL_01, styles, { allowMultiple: true });


export default ULComponent;
export {};
