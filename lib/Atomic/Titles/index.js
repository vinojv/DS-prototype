/**
 * Created by mahesh on 6/1/17.
 */
import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const HeaderComponent = ({children = '', className, type,  style, size}) => {

    if (size == 2)
        return <h2 className={classnames(className)} style={style} styleName={'default ' + type}>{children}</h2>;
    else if (size == 3)
        return <h3 className={classnames(className)} style={style} styleName={'default ' + type}>{children}</h3>;
    else if (size == 4)
        return <h4 className={classnames(className)} style={style} styleName={'default ' + type}>{children}</h4>;
    else if (size == 5)
        return <h5 className={classnames(className)} style={style} styleName={'default ' + type}>{children}</h5>;
    else
        return <h1 style={style} className={classnames(className)} styleName={'default ' + type}>{children}</h1>;
};

let CapitalizedHeader = props => <HeaderComponent children={props.children}
                                                  style={props.style}
                                                  type={'capitalized ' + (props.type || '')}
                                                  size={props.size}/>;

let UnderlinedHeader = props => <HeaderComponent children={props.children}
                                                 style={props.style}
                                                 type={'underline ' + (props.type || '')}
                                                 size={props.size}/>;

HeaderComponent.propTypes = {
    style:PropTypes.any,
    type: PropTypes.string,
    className:PropTypes.any,
    size:React.PropTypes.oneOf([1, 2, 3, 4, 5]),
};
HeaderComponent.defaultProps = {
    style:{},
    type: '',
    className:{},
    size:1,
};

export default HeaderComponent;
export {CapitalizedHeader, UnderlinedHeader};