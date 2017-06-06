/**
 * Created by mahesh on 6/1/17.
 */

import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ParagraphComponent = ({children = '', className, type,  style}) =>
    <p className={classnames(className)}
       style={style}
       styleName={'default ' + type}>{children}</p>;

let JustifiedParagraph = props => <ParagraphComponent children={props.children}
                                                      style={props.style}
                                                      type={'justified ' + (props.type || '')}
                                                      className={props.className}/>;

let CenterAllignedParagraph = props => <ParagraphComponent children={props.children}
                                                           style={props.style}
                                                           type={'centerAligned ' + (props.type || '')}
                                                           className={props.className}/>;

let LeftAllignedParagraph = props => <ParagraphComponent children={props.children}
                                                         style={props.style}
                                                         type={'leftAligned ' + (props.type || '')}
                                                         className={props.className}/>;

let RightAllignedParagraph = props => <ParagraphComponent children={props.children}
                                                          style={props.style}
                                                          type={'rightAligned ' + (props.type || '')}
                                                          className={props.className}/>;

let RaisedParagraph = props => <ParagraphComponent children={props.children}
                                                   style={props.style}
                                                   type={'raised ' + (props.type || '')}
                                                   className={props.className}/>;

ParagraphComponent.propTypes = {
    style:PropTypes.any,
    type: PropTypes.string,
    className:PropTypes.any,

};
ParagraphComponent.defaultProps = {
    style:{},
    type: '',
    className:{}
};

export default ParagraphComponent;
export {JustifiedParagraph, CenterAllignedParagraph, LeftAllignedParagraph, RightAllignedParagraph};