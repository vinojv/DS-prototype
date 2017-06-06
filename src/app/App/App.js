/**
 * Created by mahesh on 6/6/17.
 */
import React from 'react';
import styles from './styles.css';
import Conmponents from '../../Conpoments/index';

export default class App extends React.Component{

    constructor(){
        super();
    }


    render(){
        return(
            <div styleName="app">
                <Conmponents/>
            </div>
        )
    }
}