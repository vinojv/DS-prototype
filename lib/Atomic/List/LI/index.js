/**
 * Created by mahesh on 6/2/17.
 */

import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const LIComponent = ({children = '', className = {}, type,  style, onClick, onMouseOver, onMouseOut}) =>(
    <li className={classnames(className)}
        style={style}
        styleName={'default ' + type}
        onClick={() => onClick(children)}
        onMouseOver={() => onMouseOver(children)}
        onMouseOut={() => onMouseOut(children)}>{children}</li>
);

const HorizantalLIComponent = props => <LIComponent className={props.className}
                                                    type={"horizantal " + (props.type || '')}
                                                    children={props.children}
                                                    style={props.style}
                                                    onClick={props.onClick}
                                                    onMouseOver={props.onMouseOver}
                                                    onMouseOut={props.onMouseOut}/>;

LIComponent.propTypes = {
    onClick: PropTypes.func,
    onMouseOver:PropTypes.func,
    onMouseOut:PropTypes.func,
    style:PropTypes.any,
    type: PropTypes.string,

};
LIComponent.defaultProps = {
    onClick: () => {},
    onDoubleClick: () => {},
    onMouseOver:() => {},
    onMouseOut:() => {},
    style:{},
    type: '',
};

export default LIComponent;
export {HorizantalLIComponent};
