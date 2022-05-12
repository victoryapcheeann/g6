import G6 from "@antv/g6";

const defaultLegendData = {
  nodes: [
    { id: "family", label: "家庭成员" },
    { id: "financial", label: "账户" },
    { id: "social-network", label: "社交网络最近联系人" },
    { id: "club", label: "社团" }
  ],
  edges: [
    { id: "family", label: "家庭关系" },
    { id: "financial", label: "账户交易" },
    { id: "social-network", label: "最近联系" },
    { id: "club", label: "社团关系" }
  ]
};

const getLegend = (colorSetMap, legendData = defaultLegendData) => {
  legendData.nodes.forEach((node) => {
    node.style = {
      fill: colorSetMap[node.id].mainFill,
      stroke: colorSetMap[node.id].mainStroke,
      lineWidth: 1
    };
  });
  legendData.edges.forEach((edge) => {
    edge.style = {
      stroke: colorSetMap[edge.id].mainStroke
    };
  });
  const legend = new G6.Legend({
    data: legendData,
    align: "center",
    layout: "horizontal", // vertical
    position: "-top",
    vertiSep: 0,
    horiSep: 28,
    offsetY: 24,
    padding: [32, 24, 18, 12],
    containerStyle: {
      fill: "#fff",
      lineWidth: 0.2,
      radius: 10
    },
    filter: {
      enable: true,
      multiple: true,
      trigger: "click",
      graphActiveState: "activeByLegend",
      graphInactiveState: "inactiveByLegend",
      filterFunctions: {
        family: (d) => d.tags.includes("family"),
        financial: (d) => d.tags.includes("financial"),
        "social-network": (d) => d.tags.includes("social-network"),
        club: (d) => d.tags.includes("club0") || d.tags.includes("club1")
      }
    }
  });
  return legend;
};

export default getLegend;
