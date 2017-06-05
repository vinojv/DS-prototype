/**
 * Created by mahesh on 6/2/17.
 */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const LI_01 = ({children='', className='', style={}}) =>(
    <li style={style} styleName={'default'}>{children}</li>
);

const LIComponent = CSSModules( LI_01, styles, { allowMultiple: true });

const VerticalLIComponent = props => <LIComponent></LIComponent>


export default LIComponent;
export {};
