/**
 * Created by mahesh on 6/6/17.
 */
import React from 'react';
import ButtonComponent,{DestructiveButton, EllipseButton, RoundedRectButton} from '../../lib/Atomic/Buttons/index';
import ULComponent from '../../lib/Atomic/UL/Index';
import LIComponent from '../../lib/Atomic/LI/index';
import HeaderComponent from '../../lib/Atomic/Titles/index';
import InputComponent,{SearchComponent} from '../../lib/Atomic/Input/index';

export default class Conmponents extends React.Component {

    constructor() {
        super();

        this.click = this.click.bind(this);
        this.doubleClick = this.doubleClick.bind(this);
    }

    click = (event, text) =>{
        console.log('click');
    };

    doubleClick = (event, text) =>{
        console.log('doubleClick');
    };


    render() {
        return (
            <div>
                <HeaderComponent size={4}>HeaderComponentHeaderComponent</HeaderComponent>
                <InputComponent/>
                <ULComponent>
                    <LIComponent onClick={this.click}>1---</LIComponent>
                    <LIComponent onClick={this.click}>2---</LIComponent>
                    <LIComponent onClick={this.click}>3---</LIComponent>
                    <LIComponent onClick={this.click}>4---</LIComponent>
                </ULComponent>
                <SearchComponent/>
            </div>
        );
    }
}