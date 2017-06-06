/**
 * Created by mahesh on 6/6/17.
 */
import React from 'react';

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

            </div>
        );
    }
}