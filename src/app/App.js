import React, { Component } from 'react';
import {
    FixedLayout,
    Header,
    LeftBar,
    RightBar,
    Shadow,
    ForceDirectedGraph3d,
} from '../../lib/index';
import classNames from 'classnames';
import * as styles from './style.css';

import data from './data';

export default () => <FixedLayout>
    <Header title={"CUSTOMER"}
            subtitle="CHURN MODEL"/>
    <LeftBar links={[
        {
            link: '#',
            style: classNames(styles['dashboard']),
        },
    ]}>
        <a href="#" styleName="segments active" id="link-segments"></a>
        <a href="#" styleName="usage" id="link-usage"></a>
        <a href="#" styleName="model" id="link-model"></a>
        <a href="#" styleName="system" id="link-system"></a>
    </LeftBar>
    <RightBar>
        <div styleName="img"></div>
    </RightBar>
    <Shadow style={{ bottom: '0px', height: '208px' }}/>
    <ForceDirectedGraph3d data={data}
                          tooltip={(c_id = parseInt(Math.random() * 10000000)) => `Customer-${c_id}: Churn Probability: ${parseInt(Math.random() * 100)}%`}
                          autoColorBy={'user'}
                          colorField={'color'}
                          forceEngine={'ngraph'}
    />
</FixedLayout>;