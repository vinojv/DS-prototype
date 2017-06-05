/**
 * Created by mahesh on 6/5/17.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Search = ({children='', className='', style={}}) =>(
    <input type="text" placeholder="Search.." style={style} styleName={'default'}/>
);

const SearchComponent = CSSModules( Search, styles, { allowMultiple: true });

export default SearchComponent;
export {};