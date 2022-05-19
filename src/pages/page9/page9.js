import React, { useEffect, useState } from "react";
import G6 from "@antv/g6";

G6.registerEdge(
    'circle-running',
    {
      afterDraw(cfg, group) {
        // get the first shape in the group, it is the edge's path here=
        const shape = group.get('children')[0];
        // the start position of the edge's path
        const startPoint = shape.getPoint(0);
  
        // add red circle shape
        const circle = group.addShape('circle', {
          attrs: {
            x: startPoint.x,
            y: startPoint.y,
            fill: '#1890ff',
            r: 3,
          },
          name: 'circle-shape',
        });
  
        // animation for the red circle
        circle.animate(
          (ratio) => {
            // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
            // get the position on the edge according to the ratio
            const tmpPoint = shape.getPoint(ratio);
            // returns the modified configurations here, x and y here
            return {
              x: tmpPoint.x,
              y: tmpPoint.y,
            };
          },
          {
            repeat: true, // Whether executes the animation repeatly
            duration: 3000, // the duration for executing once
          },
        );
      },
    },
    'cubic', // extend the built-in edge 'cubic'
  );

  const data = {
    nodes: [
      {
        id: 'node1',
        x: 100,
        y: 100,
        label: 'Node 1',
        labelCfg: {
          position: 'top',
        },
      },
      {
        id: 'node2',
        x: 300,
        y: 200,
        color: '#40a9ff',
        label: 'Node 2',
        labelCfg: {
          position: 'left',
          offset: 10,
        },
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
      },
    ],
  };

export default function Page9() {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      //实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        // width: 500,
        height: 900,
        modes: {
          default: [
            { type: "drag-canvas" },
            { type: "zoom-canvas" },
            { type: "drag-node" }
          ]
        },
        layout: {
          type: "dagre",
          rankdir: "BT", // 可选，默认为图的中心
          // align: 'DL', // 可选
          nodesep: 50, // 可选
          ranksep: 90 // 可选
          // controlPoints: true
        },
        defaultNode: {
          type: "rect-xml2"
        },
        defaultEdge: {
            type: 'circle-running',
            style: {
            lineWidth: 2,
            stroke: '#bae7ff',
            },
        },
      });
    }

    graph.data(data);

    graph.render();

    
  }, []);

  return <div ref={ref}></div>;
}
