/**
 * Created by mahesh on 5/31/17.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Button_01 = ({children='', className='', style={}}) =>(
    <button style={style} styleName={'default '+className}>{children}</button>
);

const ButtonComponent = CSSModules( Button_01, styles, { allowMultiple: true });

let DestructiveButton = props => <ButtonComponent className={"desctructive " + (props.className || '')} children={props.children}/>

let CircularButton = props => <ButtonComponent className={"circular " + (props.className || '')} children={props.children}/>;

let RoundedRectButton = props => <ButtonComponent className={"roundedRect " + (props.className || '')} children={props.children}/>;

export default ButtonComponent;
export {DestructiveButton, CircularButton, RoundedRectButton};