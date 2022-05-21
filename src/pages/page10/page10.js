import React, { useEffect, useState } from "react";
import G6 from "@antv/g6";


const data = {
    nodes: [
      {
        id: '0',
        x: 150,
        y: 50,
      },
      {
        id: '1',
        x: 350,
        y: 50,
      },
      {
        id: '2',
        x: 150,
        y: 100,
      },
      {
        id: '3',
        x: 350,
        y: 100,
      },
      {
        id: '4',
        x: 150,
        y: 150,
      },
      {
        id: '5',
        x: 350,
        y: 150,
      },
      {
        id: '6',
        x: 150,
        y: 200,
      },
      {
        id: '7',
        x: 350,
        y: 200,
      },
      {
        id: '8',
        x: 150,
        y: 250,
      },
      {
        id: '9',
        x: 350,
        y: 250,
      },
      {
        id: '10',
        x: 150,
        y: 300,
      },
      {
        id: '11',
        x: 350,
        y: 300,
      },
      {
        id: '12',
        x: 150,
        y: 350,
      },
      {
        id: '13',
        x: 350,
        y: 350,
      },
      {
        id: '14',
        x: 150,
        y: 400,
      },
      {
        id: '15',
        x: 350,
        y: 400,
      },
    ],
    edges: [
      {
        id: 'edge0',
        source: '0',
        target: '1',
        label: 'default arrow',
        style: {
          endArrow: true,
        },
      },
      {
        id: 'edge1',
        source: '2',
        target: '3',
        label: 'triangle arrow',
        style: {
          endArrow: {
            path: G6.Arrow.triangle(),
          },
        },
      },
      {
        id: 'edge2',
        source: '4',
        target: '5',
        label: 'vee arrow',
        style: {
          endArrow: {
            path: G6.Arrow.vee(),
          },
        },
      },
      {
        id: 'edge3',
        source: '6',
        target: '7',
        label: 'circle arrow',
        style: {
          endArrow: {
            path: G6.Arrow.circle(5, 3),
            d: 3,
          },
        },
      },
      {
        id: 'edge4',
        source: '8',
        target: '9',
        label: 'diamond arrow',
        style: {
          endArrow: {
            path: G6.Arrow.diamond(10, 10, 3),
            d: 3,
          },
        },
      },
      {
        id: 'edge5',
        source: '10',
        target: '11',
        label: 'rect arrow',
        style: {
          endArrow: {
            path: G6.Arrow.rect(10, 10, 3),
            d: 3,
          },
        },
      },
      {
        id: 'edge6',
        source: '12',
        target: '13',
        label: 'rect arrow 2',
        style: {
          endArrow: {
            path: G6.Arrow.rect(10, 2, 5),
            d: 5,
          },
        },
      },
      {
        id: 'edge7',
        source: '14',
        target: '15',
        label: 'triangleRect arrow',
        style: {
          endArrow: {
            path: G6.Arrow.triangleRect(10, 10, 10, 2, 4),
          },
        },
      },
    ],
  };

  data.edges.forEach((edge) => {
    edge.style.stroke = '#F6BD16';
    // console.log(edge.style.endArrow);
    if (edge.id !== 'edge0') edge.style.endArrow.fill = '#F6BD16';
  });
  
export default function Page10() {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      //实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        // width,
        height: 900,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        defaultNode: {
          size: 15,
          style: {
            fill: '#DEE9FF',
            stroke: '#5B8FF9',
          },
        },
        modes: {
          // behaviors
          default: ['drag-node'],
        },
      });
    }

    graph.data(data);

    graph.render();

    
  }, []);

  return <div ref={ref}></div>;
}
