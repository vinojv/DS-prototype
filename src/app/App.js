import React, { Component } from 'react';
import {
    FixedLayout,
    Header,
    LeftBar,
    RightBar,
    BottomShadow,
    ForceDirectedGraph3d,
} from './../lib';
import classNames from 'classnames';
import * as styles from './style.css';

import data from './data';

export default () => <FixedLayout>
    <Header/>
    <LeftBar links={[
        {
            link: '#',
            style: classNames(styles['nav__link'], styles.dashboard),
        },
    ]}/>
    <RightBar/>
    <BottomShadow/>
    <ForceDirectedGraph3d data={data}/>
</FixedLayout>;