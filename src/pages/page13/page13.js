import React, { useEffect, useState } from "react";
import G6 from "@antv/g6";
import { appenAutoShapeListener } from "@antv/g6-react-node";
import { registerCardNode } from './nodes';
import { registerCircleRunning, registerLineDashing, registerLineGrowth } from './edges'
import { data } from './data'
import insertCss from 'insert-css';

// We use 'insert-css' to insert custom styles
// It is recommended to add the style to your own style sheet files
// If you want to copy the code directly, please remember to install the npm package 'insert-css
insertCss(`
  .g6-component-tooltip {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
`);

const tooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  fixToNode: [1, 0.5],
  // the types of items that allow the tooltip show up
  // 允许出现 tooltip 的 item 类型
  itemTypes: ['node', 'edge'],
  // custom the tooltip's content
  // 自定义 tooltip 内容
  getContent: (e) => {
    const outDiv = document.createElement('div');
    outDiv.style.width = 'fit-content';
    outDiv.style.height = 'fit-content';
    const model = e.item.getModel();
    if (e.item.getType() === 'node') {
      outDiv.innerHTML = `Actor: ${model.label}`;
    } else {
      const source = e.item.getSource();
      const target = e.item.getTarget();
      outDiv.innerHTML = `Source：${source.getModel().label}<br/>Target：${target.getModel().label}`;
    }
    return outDiv;
  },
});

registerCircleRunning(G6)
registerLineDashing(G6)
registerLineGrowth(G6)
registerCardNode(G6)

export default function Page13() {
  const [item, setItem] = useState('No Item')
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      //实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        // width: 500,
        height: 900,
        plugins: [tooltip],
        modes: {
          default: [
            'drag-canvas', 'activate-relations',
            { type: "drag-canvas" },
            { type: "zoom-canvas" },
            { type: "drag-node" }
          ]
        },
        layout: {
          type: "dagre",
          rankdir: "BT", // 可选，默认为图的中心
          // align: 'DL', // 可选
          nodesep: 150, // 可选
          ranksep: 90 // 可选
          // controlPoints: true
        },
        defaultNode: {
          type: "rect-xml2"
        },
        defaultEdge: {
          type: "quadratic",
          style: {
            stroke: "#ffb203",
            lineWidth: 3,
            endArrow: {
              path: G6.Arrow.triangle(4, 4, 8),
              d: 8
            }
          },
          edgeStateStyles: {
            highlight: {
              stroke: "#ffb203",
              lineWidth: 5
            },
            dark: {
              stroke: "#ffb20333"
            }
          },

          curveOffset: 100
          // controlPoints: [{ x: 10, y: 20 }]
        }
      });
    }

    appenAutoShapeListener(graph)
    graph.data(data);

    graph.render();
    graph.zoomTo(13)
    
    graph.on('node:click', (e) => {
        console.log('node', e.item._cfg.id)
    })

    graph.on('edge:click', (e) => {
        console.log('edge', e.item._cfg.model.source, e.item._cfg.model.target)
    })
  }, []);

  return <div ref={ref}>{item}</div>;
}
