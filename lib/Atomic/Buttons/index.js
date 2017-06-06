/**
 * Created by mahesh on 5/31/17.
 */
import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

let clicked = () => {
};

const ButtonComponent = ({children = '', className = {}, type='', style={}, onClick=clicked, onDoubleClick=clicked, onMouseOver=clicked, onMouseOut=clicked}) =>
    (<button className={classnames(className)}
                style={style}
                onClick={(event) => onClick(children, event)}
                onDoubleClick={(event) => onDoubleClick(children, event)}
                onMouseOver={(event) => onMouseOver(children, event)}
                onMouseOut={(event) => onMouseOut(children, event)}
                styleName={'default ' + type}>{children}</button>
    );

let DestructiveButton = props => <ButtonComponent className={props.className}
                                                  type={"desctructive " + (props.type || '')}
                                                  children={props.children}
                                                  onClick={props.onClick}
                                                  onDoubleClick={props.onDoubleClick}
                                                  onMouseOver={props.onMouseOver}
                                                  onMouseOut={props.onMouseOut}
                                                  style={props.style}/>

let EllipseButton = props => <ButtonComponent className={props.className}
                                               type={"circular " + (props.type || '')}
                                               children={props.children}
                                               onClick={props.onClick}
                                               onDoubleClick={props.onDoubleClick}
                                               onMouseOver={props.onMouseOver}
                                               onMouseOut={props.onMouseOut}
                                               style={props.style}/>;

let RoundedRectButton = props => <ButtonComponent className={props.className}
                                                  type={"roundedRect " + (props.type || '')}
                                                  children={props.children}
                                                  onClick={props.onClick}
                                                  onDoubleClick={props.onDoubleClick}
                                                  onMouseOver={props.onMouseOver}
                                                  onMouseOut={props.onMouseOut}
                                                  style={props.style}/>;

ButtonComponent.propTypes = {
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onMouseOver:PropTypes.func,
    onMouseOut:PropTypes.func,
    type: PropTypes.string,

};
ButtonComponent.defaultProps = {
    onClick: () => {},
    onDoubleClick: () => {},
    onMouseOver:() => {},
    onMouseOut:() => {},
    type: '',
};

export default ButtonComponent;
export {DestructiveButton, EllipseButton, RoundedRectButton};