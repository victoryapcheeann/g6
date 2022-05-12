import React, { useEffect, useState } from "react";
import G6 from "@antv/g6";
import fiData from "./data/financial";
import inData from "./data/increment";

import { colorSets } from "./colors";
import getLegend from "./legend";
import { registerReactNode } from "./react-node";
import { appenAutoShapeListener } from "@antv/g6-react-node";

registerReactNode(G6);

const financialData = { ...fiData };
const incrementData = { ...inData };
const iconsMap = {
  account:
    "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*r4gpR5PMzesAAAAAAAAAAAAAARQnAQ",
  bank:
    "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*k7OXRZz2C0EAAAAAAAAAAAAAARQnAQ",
  shop:
    "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*12R4SIxt4cYAAAAAAAAAAAAAARQnAQ"
};
// const icons = fonts.glyphs.map((icon) => ({
//   name: icon.font_class,
//   unicode: String.fromCodePoint(icon.unicode_decimal) // `\\u${icon.unicode}`,
// }));
// const getIcon = (text) => {
//   let iconName = text;
//   const matchIcon = icons.find((icon) => icon.name === iconName) || {
//     unicode: "",
//     name: "default"
//   };

//   return matchIcon.unicode;
// };

/**
 * by Shiwu
 */

const colorSetMap = {
  family: colorSets[1],
  financial: colorSets[0],
  "social-network": colorSets[2],
  club: colorSets[3],
  club0: colorSets[3],
  club1: colorSets[3],
  recommend: colorSets[4],
  main: colorSets[5],

  undefined: colorSets[0],
  account: colorSets[1],
  shop: colorSets[2],
  bank: colorSets[3]
};

const formatData = (dataType, data, idx) => {
  const newData = {
    nodes: [],
    edges: []
  };
  const nodeMap = {};
  data.nodes.forEach((node) => {
    node.labelCfg = {
      position: "bottom"
    };
    node.dataType = "account";
    nodeMap[node.id] = node;
    const amount =
      node.donutAttrs.income +
      node.donutAttrs.outcome +
      node.donutAttrs.unknown;
    // const size = 180 + amount / 10;
    // node.size = 50
    if (!node.tags) node.tags = [];
    node.tags.push(node.tag);
    if (!node.style) {
      node.style = {};
    }
    console.log("node.nodeType", node.nodeType);
    node.style.fill = colorSetMap[node.nodeType].mainFill;
    node.style.stroke = colorSetMap[node.nodeType].mainStroke;
    node.icon = {
      show: true,
      // fontFamily: "iconfont",
      // text: "\ue81f"
      img: iconsMap[node.nodeType]
      // width: size / 3,
      // height: size / 3
    };
    newData.nodes.push({ ...node });
  });
  data.edges.forEach((edge) => {
    edge.size = Math.max(edge.amount / 1.5, 1);
    edge.label = `¥${edge.amount * 1000}`;
    edge.dataType = "transfer";
    let d = 45; // nodeMap[edge.target] ? nodeMap[edge.target].size / 1.5 : 10;
    if (edge.target === "shop4" || edge.target === "bank2") d = 100;
    if (
      (edge.target === "self" && edge.source === "son") ||
      edge.target === "shop3"
    )
      d = 80;
    if (edge.target === "club1-person1") d = 80;
    if (edge.source === "club1-person1" && edge.target === "club1-person6")
      d = 80;
    if (edge.source === "self" && edge.target === "nf1") d = 80;
    if (edge.source === "nf1" && edge.target === "club1-person6") d = 80;
    edge.style = {
      endArrow: {
        path: G6.Arrow.triangle(5, 5, d),
        d,
        fill: colorSetMap["financial"].mainStroke
      },
      stroke: colorSetMap["financial"].mainStroke
    };
    newData.edges.push({ ...edge });
  });
  return newData;
};

// 格式化账户数据
const formattedFinancialData = formatData("financial", financialData);

const data = {
  nodes: formattedFinancialData.nodes,
  edges: formattedFinancialData.edges
};
G6.Util.processParallelEdges(data.edges, 15);

export default function PageTwo() {
  const ref2 = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) { 
      const graph = new G6.Graph({
        container: ref2.current,
        // width,
        height: 900,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitView: true,
        linkCenter: true,
        // plugins: [getLegend(colorSetMap)],
        modes: {
          default: ["drag-canvas", "drag-node", "zoom-canvas"]
        },
        defaultNode: {
          type: "react-node",
          labelCfg: {
            position: "bottom"
          },
          donutColorMap: {
            // 甜甜圈颜色映射，字段名与 donutAttrs 中的字段名对应
            income: "#55a9f2",
            outcome: "#0d47b5",
            unknown: "#999"
          }
        },
        defaultEdge: {
          size: 1,
          labelCfg: {
            autoRotate: true,
            style: {
              stroke: "#fff",
              lineWidth: 4,
              fill: "#aaa"
            }
          },
          style: {
            stroke: "#666",
            opacity: 0.7
          }
        },
        layout: {
          type: "dagre",
          rankdir: "lr",
          // nodesep: 60,
          // nodeSize: 50,
          nodesepFunc: (d) => {
            if (d.id === "son" || d.id === "shop4") return 120;
            return 20;
          }
          // ranksep: 60,
          // nodesep: 45
        },
        animate: true
      });

      appenAutoShapeListener(graph);

      graph.on("node:mouseenter", (evt) => {
        const { item } = evt;
        graph.setItemState(item, "active", true);
      });
      
      graph.on("node:mouseleave", (evt) => {
        const { item } = evt;
        graph.setItemState(item, "active", false);
      });
      
      graph.on("node:click", (evt) => {
        const { item } = evt;
        graph.setItemState(item, "selected", true);
      });
      graph.on("canvas:click", (evt) => {
        graph.getNodes().forEach((node) => {
          graph.clearItemStates(node);
        });
      });

      graph.data(data);
      graph.render();

      }}, []
    )
    
    return <div ref={ref2}></div>;
}