/**
 * Created by mahesh on 6/5/17.
 */
import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class InputComponent extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        const { onChange, ref, inputType, onClick, defaultValue, placeholder, disabled, className, type} = this.props;

        return(
            <div>
                <input type={inputType}
                       className={classnames(className)}
                       onChange={onChange}
                       styleName={"default " + (type || '')}
                       ref={ref}
                       placeholder={placeholder}
                       onClick={onClick}
                       disabled={disabled}
                       defaultValue={defaultValue}/>
            </div>);
    }
}

let SearchComponent = props => <InputComponent inputType="text"
                                               placeholder={props.placeholder || 'Search...'}
                                               className={props.className}
                                               type={"borderLess " + (props.type || '')}
                                               style={props.style}
                                               onChange={props.onChange}
                                               ref={props.ref}
                                               onClick={props.onClick}
                                               disabled={props.disabled}
                                               defaultValue={props.defaultValue}/>;

let NumberInput = props => <InputComponent inputType="number"
                                           placeholder={props.placeholder}
                                           className={props.className}
                                           type={"borderLess " + (props.type || '')}
                                           style={props.style}
                                           onChange={props.onChange}
                                           ref={props.ref}
                                           onClick={props.onClick}
                                           disabled={props.disabled}
                                           defaultValue={props.defaultValue}/>;

let ColorInput = props => <InputComponent inputType="color"
                                          placeholder={props.placeholder}
                                          className={props.className}
                                          type={"color " + (props.type || '')}
                                          style={props.style}
                                          onChange={props.onChange}
                                          ref={props.ref}
                                          onClick={props.onClick}
                                          disabled={props.disabled}
                                          defaultValue={props.defaultValue}/>;

let PasswordInput = props => <InputComponent inputType="password"
                                             placeholder={props.placeholder}
                                             className={props.className}
                                             type={"borderLess " + (props.type || '')}
                                             style={props.style}
                                             onChange={props.onChange}
                                             ref={props.ref}
                                             onClick={props.onClick}
                                             disabled={props.disabled}
                                             defaultValue={props.defaultValue}/>;

InputComponent.propTypes = {
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.any,
    type:PropTypes.string,
    style: PropTypes.any,
    onChange:PropTypes.func,
    ref: PropTypes.any,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
};

InputComponent.defaultProps = {
    inputType: 'text',
    placeholder: '',
    className: {},
    type:'',
    style: {},
    onChange: ()=>{},
    ref: {},
    onClick: ()=>{},
    disabled: false,
    defaultValue: '',
};

export {NumberInput, ColorInput, PasswordInput, SearchComponent};