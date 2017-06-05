/**
 * Created by mahesh on 6/1/17.
 */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

@CSSModules(styles)

export default Paragraph = ({children = '', className=[], styles = {}, type = '', ...rest}) => <p
styleName={className.join(' ')}
style={styles}
{...rest}
>
    {children}
</p>;

let JustifiedParagraph = props => <Paragraph styleName="justified"></Paragraph>;

let CenterAllignedParagraph = props => <Paragraph styleName="centerAligned"></Paragraph>;

let LeftAllignedParagraph = props => <Paragraph styleName="leftAligned"></Paragraph>;

let RightAllignedParagraph = props => <Paragraph styleName="rightAligned"></Paragraph>;

let RaisedParagraph = props => <Paragraph styleName="raised"/>;


export {JustifiedParagraph, CenterAllignedParagraph, LeftAllignedParagraph, RightAllignedParagraph};