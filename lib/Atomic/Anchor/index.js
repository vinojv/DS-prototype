/**
 * Created by mahesh on 6/2/17.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Anchor = ({children='', className='', style={}}) =>(
    <a style={style} styleName={'default'}>{children}</a>
);

const AnchorComponent = CSSModules( Anchor, styles, { allowMultiple: true });

export default AnchorComponent;
export {};
