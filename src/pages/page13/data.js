
import G6 from '@antv/g6';

export const data = {
    nodes: [
      { id: "node0", label: "node0" },
      { id: "node1", label: "1" },
      { id: "node2", label: "2" },
      { id: "node3", label: "3" },
      { id: "node4", label: "4" },
      { id: "node5", label: "5" },
      { id: "node6", label: "6" },
      { id: "node7", label: "7" },
      { id: "node8", label: "8" },
      { id: "node9", label: "9" },
      { id: "node10", label: "10" },
      { id: "node11", label: "11" },
      { id: "node12", label: "12" },
      { id: "node13", label: "13" },
      { id: "node14", label: "14" },
      { id: "node15", label: "15" },
      { id: "node16", label: "16" },
      { id: "node20", label: "20", type: 'circle', size: 100},
      { id: "node21", label: "21", type: 'donut', size: 100,
          donutAttrs: {
            prop1: 10,
            prop2: 20,
            prop3: 25
          },
          donutColorMap: {
            prop1: '#8eaade',
            prop2: '#5c7cb8',
            prop3: '#1e3f7d'
          }
      },
      { id: "node22", label: "22", type: 'ellipse', size: [80, 50] },
      { id: "node23", label: "23", type: 'modelRect',
      size: [270, 80],
      style: {
        radius: 5,
        stroke: '#69c0ff',
        fill: '#ffffff',
        lineWidth: 1,
        fillOpacity: 1,
      },
      // label configurations
      labelCfg: {
        style: {
          fill: '#595959',
          fontSize: 14,
        },
        offset: 30,
      },
      // left rect
      preRect: {
        show: true,
        width: 4,
        fill: '#40a9ff',
        radius: 2,
      },
      // configurations for the four linkpoints
      linkPoints: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        // the size of the linkpoints' circle
        size: 10,
        lineWidth: 1,
        fill: '#72CC4A',
        stroke: '#72CC4A',
      },
      // configurations for the icon
      logoIcon: {
        // whether to show the icon
        show: true,
        x: 0,
        y: 0,
        // the image url for the icon, string type
        img:
          'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
        width: 16,
        height: 16,
        // adjust the offset along x-axis for the icon
        offset: 0,}
      },
      { id: "node24", label: "24", type: 'diamond', size: [80, 50] },
      { id: "node25", label: "25", type: 'star', size: [80, 50] },
      { id: "node26", label: "26", type: 'triangle', size: 40 },
      { id: "node27", label: "27", type: 'image', size: [260, 80], img: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg'},
    ],
    edges: [
      { source: "node10", target: "node20" },
      { source: "node10", target: "node21",
      style: {
        endArrow: {
          path: G6.Arrow.triangle(),
        },
      }},
      { source: "node10", target: "node22",
      style: {
        endArrow: {
          path: G6.Arrow.vee(),
        },
      }},
      { source: "node10", target: "node23",
      style: {
        endArrow: {
          path: G6.Arrow.circle(5, 3),
          d: 3,
        },
      }},
      { source: "node10", target: "node24",
      style: {
        endArrow: {
          path: G6.Arrow.diamond(10, 10, 3),
          d: 3,
        },
      }},
      { source: "node10", target: "node25",
      style: {
        endArrow: {
          path: G6.Arrow.rect(10, 10, 3),
          d: 3,
        },
      }},
      { source: "node10", target: "node26",
      style: {
        endArrow: {
          path: G6.Arrow.rect(10, 2, 5),
          d: 5,
        },
      }},
      { source: "node10", target: "node27" },
      { source: "node1", target: "node9", type: 'line-growth',
        labelCfg: {
            refY: -30,
            refX: 60,
            style: {
                fill: 'purple'
            }
        },
        label: '$12,000',
        style: {
          lineWidth: 5,
          stroke: 'purple',
        }
      },
      { source: "node0", target: "node2" },
      { source: "node0", target: "node3" },
      { source: "node0", target: "node4" },
      { source: "node0", target: "node5" },
      { source: "node7", target: "node1", type: 'line-dash', 
        label: '$5,000',
        labelCfg: {
            refY: -30,
            refX: 60,
            style: {
                fill: 'green'
            }
        },
        style: {
          lineWidth: 10,
          stroke: 'black',
        }
      },
      { source: "node8", target: "node7",
        label: '$15,000',
        labelCfg: {
            refY: 30,
            refX: 60,
            style: {
                fill: 'red'
            }
        }
      },
      { source: "node7", target: "node8", curveOffset: 100,
        label: '$25,000',
        labelCfg: {
            refY: -30,
            refX: 60,
            style: {
                fill: 'red'
            }
        },
      },
      { source: "node8", target: "node7"},
      { source: "node2", target: "node8" },
      { source: "node2", target: "node10" },
      { source: "node2", target: "node11" },
      { source: "node2", target: "node12" },
      { source: "node2", target: "node13" },
      { source: "node3", target: "node14" },
      { source: "node3", target: "node15" },
      { source: "node3", target: "node16", 
        label: '$10,000',
        labelCfg: {
            refY: -30,
            refX: 60,
            style: {
                fill: 'red'
            }
        },
      },
      { source: "node6", target: "node1", type: 'circle-running',
        label: '$10,000',
        labelCfg: {
          refY: -30,
          refX: 60,
        }
      },
    ]
  };
  