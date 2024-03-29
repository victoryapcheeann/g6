import React, { useEffect, useState } from "react";
import G6 from "@antv/g6";
import insertCss from 'insert-css';

// We use 'insert-css' to insert custom styles
// It is recommended to add the style to your own style sheet files
// If you want to copy the code directly, please remember to install the npm package 'insert-css
insertCss(`
  .g6-component-tooltip {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0px 10px 24px 10px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
`);

const data = {
  nodes: [
    {
      id: '0',
      label: 'node-0',
      x: 100,
      y: 100,
      description: 'This is node-0.',
      subdescription: 'This is subdescription of node-0.',
    },
    {
      id: '1',
      label: 'node-1',
      x: 250,
      y: 100,
      description: 'This is node-1.',
      subdescription: 'This is subdescription of node-1.',
    },
    {
      id: '2',
      label: 'node-2',
      x: 150,
      y: 310,
      description: 'This is node-2.',
      subdescription: 'This is subdescription of node-2.',
    },
    {
      id: '3',
      label: 'node-3',
      x: 320,
      y: 310,
      description: 'This is node-3.',
      subdescription: 'This is subdescription of node-3.',
    },
  ],
  edges: [
    {
      id: 'e0',
      source: '0',
      target: '1',
      description: 'This is edge from node 0 to node 1.',
    },
    {
      id: 'e1',
      source: '0',
      target: '2',
      description: 'This is edge from node 0 to node 2.',
    },
    {
      id: 'e2',
      source: '0',
      target: '3',
      description: 'This is edge from node 0 to node 3.',
    },
  ],
};

const tooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  // the types of items that allow the tooltip show up
  // 允许出现 tooltip 的 item 类型
  itemTypes: ['node', 'edge'],
  // custom the tooltip's content
  // 自定义 tooltip 内容
  getContent: (e) => {
    const outDiv = document.createElement('div');
    outDiv.style.width = 'fit-content';
    //outDiv.style.padding = '0px 0px 20px 0px';
    outDiv.innerHTML = `
      <h4>Custom Content</h4>
      <ul>
        <li>Type: ${e.item.getType()}</li>
      </ul>
      <ul>
        <li>Label: ${e.item.getModel().label || e.item.getModel().id}</li>
      </ul>`;
    return outDiv;
  },
});

export default function PageOne() {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      //实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        // width: 500,
        height: 900,
        linkCenter: true,
        plugins: [tooltip],
        modes: {
          default: ['drag-node'],
        },
        defaultNode: {
          size: [80, 40],
          type: 'rect',
        },
        defaultEdge: {
          style: {
            stroke: '#b5b5b5',
            lineAppendWidth: 3,
          },
        },
      });
    }

    graph.data(data);
    graph.render();

    graph.on('node:mouseenter', (e) => {
      graph.setItemState(e.item, 'active', true);
    });
    graph.on('node:mouseleave', (e) => {
      graph.setItemState(e.item, 'active', false);
    });
    graph.on('edge:mouseenter', (e) => {
      graph.setItemState(e.item, 'active', true);
    });
    graph.on('edge:mouseleave', (e) => {
      graph.setItemState(e.item, 'active', false);
    });
    graph.on('node:click', (e) => {
      alert('wtf', e.item)
    })
    graph.on('edge:click', (e) => {
      alert('wth1', e.item)
    })
    
    
  }, []);

  return <div ref={ref}></div>;
}
