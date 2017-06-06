/**
 * Created by mahesh on 6/2/17.
 */
import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import ULComponent  from '../List/UL/index'
import {HorizantalLIComponent}  from '../List/LI/index'

let clicked = () => {};

const TABComponent = ({children = '', className = {}, type='',  style = {}, data = [], onClick}) => {
    return (
        <ULComponent style={{boxShadow:"none", border: "none"}}>
            {data.map((obj, index) => <HorizantalLIComponent onClick={onClick}>{obj}</HorizantalLIComponent>)}
        </ULComponent>
    );
};

export default TABComponent;
export {};
