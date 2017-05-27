import React, { Component } from 'react';
import ForceGraph3D from '3d-force-graph';
import * as styles from './blocks.css';

export default class block extends Component {
    static defaultProps = {
        data: {
            nodes: [],
            links: [],
        },
    };

    constructor (props) {
        super(props);
        this.loadBlocks = this.loadBlocks.bind(this);
    }

    loadBlocks () {
        const Graph = ForceGraph3D()(document.getElementById('3d-graph'));
//        Graph.resetProps(); // Wipe current state
        const { data } = this.props;

        data.nodes.forEach(node => {
            var c_id = parseInt(Math.random() * 10000000);
            node.name = `Customer-${c_id}: Churn Probability: ${parseInt(Math.random() * 100)}%`;
            if (node.user) {
                if (node.user == 'nitaku') {
                    // node.color = 0xff0000;
                    node.name = `Customer-${c_id}: Churn Probability: ${parseInt(Math.random() * 15 + 80)}%`;
                }
            }
        });

        Graph
            .cooldownTicks(300)
            .cooldownTime(20000)
            .autoColorBy('user')
            .colorField('color')
            .forceEngine('ngraph')
            .graphData(this.props.data);
    }

    componentWillReceiveProps () {
//        this.loadBlocks();
    }

    componentDidMount () {
        console.log("componentDidMount");
        this.loadBlocks();
    }

    render () {
        return (<div ref={node => this.graphNode = node}
                     id="3d-graph"
                     styleName="graph-3d">
            <div styleName="graph-tooltip" style={{ top: '502px', left: '1010px' }}></div>
        </div>);
    }
}