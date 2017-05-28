# Design System

## Table of contents
1. [Header](#Header)
1. [Left Side Bar](#LeftBar)
1. [Right Side Bar](#RightBar)
1. [Shadow](#Shadow)
1. [Force Directed Graph](#ForceDirectedGraph3d)

```js
import {
    FixedLayout,
    Header,
    LeftBar,
    RightBar,
    Shadow,
    ForceDirectedGraph3d,
} from './lib/index';
```

## Header
<p align="center">
    <img src="https://raw.githubusercontent.com/vinojv/DS-tryout/master/lib/components/Header/Screen%20Shot.png"/>
</p>
usage

```
    <Header title={"CUSTOMER"}
            subtitle="CHURN MODEL"/>
```
props(TODO)

| Name | type | default |
|---------|----------|----------|
| title| string | <null> |
| subtitle| string | <null> |

## [Left Side Bar](#LeftBar)
<p align="center">
    <img src="https://raw.githubusercontent.com/vinojv/DS-tryout/master/lib/components/left-sidebar-nav/Screen%20Shot.png"/>
</p>
usage

```
    <LeftBar links={[
        {
            link: '#',
            style: classNames(styles['dashboard']),
        },
    ]}>
        <a href="#" styleName="segments active"></a>
                .
                .
                .   
    </LeftBar>
```
props

| Name | type | default |
|---------|----------|----------|
| links| Array of Objects|

data format for links 

| Name | type | default |
|----|---|---|
| link| string | <null> |
| style| string | <null> |

## [Right Side Bar](#RightBar)
<p align="center">
    <img src="https://raw.githubusercontent.com/vinojv/DS-tryout/master/lib/components/right-sidebar-nav/Screen%20Shot.png"/>
</p>
usage (accepts child elements)

```
    <RightBar>
        <div styleName="img"></div>
    </RightBar>
```

## [Shadow](#Shadow)
usage: use style tag to set position and size of the element
```
    <Shadow style={{ bottom: '0px', height: '208px' }}/>
```
## [Force Directed Graph](#ForceDirectedGraph3d)
<p align="center">
    <img src="http://gist.github.com/vasturiano/02affe306ce445e423f992faeea13521/raw/preview.png"/>
</p>
usage

```js

    <ForceDirectedGraph3d data={data}
                      tooltip={(c_id = parseInt(Math.random() * 10000000)) => `Customer-${c_id}: Churn Probability: ${parseInt(Math.random() * 100)}%`}
                      autoColorBy={'user'}
                      colorField={'color'}
                      forceEngine={'ngraph'}
    />
```
props

| Name | type | default | values|
|---------|----------|------|----|
| data| Object| <null> | <null> |
| tooltip| function| <null> | <null> | 
| autoColorBy| string| 'user'| <null> |
| colorField| string| 'color'| <null> |
| forceEngine| string | 'ngraph'| ngraph/d3 |