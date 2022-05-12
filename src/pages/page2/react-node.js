import {
    Circle,
    createNodeFromReact,
    Image,
    Rect,
    Text
  } from "@antv/g6-react-node";
  import React from "react";
  
  const Tag = ({ color = "#66ccff", text, style = {} }) => (
    <Rect
      style={{
        fill: color,
        width: 42,
        padding: 4,
        alignItems: "center",
        radius: 4,
        ...style
      }}
    >
      <Text style={{ fill: "#fff", fontSize: 10 }}>{text}</Text>
    </Rect>
  );
  
  const PercentBar = ({
    income = 0,
    outcome = 0,
    unknown = 0,
    width,
    incomeColor,
    ourcomeColor,
    unknownColor,
    showDetail
  }) => {
    const sum = income + outcome + unknown;
    const height = 8;
    const PercentBlock = ({ title, num, color }) => (
      <Rect style={{ height, width: (num / sum) * width, fill: color }}>
        {num > 0 && (
          <Text
            style={{
              fill: showDetail && "#000",
              margin: [10, 0, 0, 0],
              fontSize: 8
            }}
          >{`${title}¥${num}`}</Text>
        )}
      </Rect>
    );
  
    return (
      <Rect
        style={{
          padding: [0, 5],
          width,
          flexDirection: "row",
          justifyContent: "flex-start"
        }}
      >
        <PercentBlock title="收入" num={income} color={incomeColor} />
        <PercentBlock title="支出" num={outcome} color={ourcomeColor} />
        <PercentBlock title="未知" num={unknown} color={unknownColor} />
      </Rect>
    );
  };
  
  const nodeTypeText = {
    shop: "商家",
    account: "个人",
    bank: "银行"
  };
  
  const nodeTypeColor = {
    shop: "#78D3F8",
    account: "#9661BC",
    bank: "#F6903D"
  };
  const dataTypeText = {
    account: "账号"
  };
  
  const onNodeClick = (evt, node, shape, graph) => {
    const lastNode = graph.find("node", (item) => item.get("model").selected);
    const lastNodeId = lastNode && lastNode.get("model").id;
  
    if (lastNodeId !== node.get("model").id) {
      if (lastNode) {
        graph.updateItem(lastNode, { selected: false });
      }
      graph.updateItem(node, { selected: true });
    }
  };
  
  const ReactNode = ({ cfg = {} }) => {
    const { style, icon, label, donutColorMap, donutAttrs, selected } = cfg;
    const { income, outcome, unknown } = donutAttrs;
    const { fill, stroke } = style || {};
    console.log(selected);
  
    const r = 50; // cfg.size / 2;
    let textRightMargin = -10;
    if (cfg.id === "son") textRightMargin = -2;
    if (cfg.id === "self") textRightMargin = -50;
    if (cfg.id.includes("shop")) textRightMargin = -20;
    if (cfg.id === "club1-person1") textRightMargin = -16;
  
    return (
      <Rect
        draggable
        style={{
          width: 150,
          height: 50,
          fill: "#fff",
          flexDirection: "row",
          margin: [0, 0, 0, 0],
          alignItems: "center"
        }}
      >
        <Rect style={{ margin: [0, 0, 0, 12] }}>
          <Image style={{ img: icon.img, width: r / 2, height: r / 2 }} />
          <Text
            style={{
              fill: "#000",
              margin: [6, textRightMargin, 6, 12],
              textAlign: "center"
            }}
          >
            {label}
          </Text>
        </Rect>
        <Rect style={{ margin: [-10, 0, 0, 0] }}>
          <Rect
            style={{
              width: r * 1.5,
              height: "auto",
              padding: [0, 0, 6, 2],
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Tag
              text={nodeTypeText[cfg.nodeType]}
              style={{ fill: nodeTypeColor[cfg.nodeType] }}
            />
            <Tag text={dataTypeText[cfg.dataType]} style={{ fill: "#008685" }} />
          </Rect>
          <PercentBar
            width={r * 1.6}
            income={income}
            outcome={outcome}
            unknown={unknown}
            incomeColor={donutColorMap.income}
            ourcomeColor={donutColorMap.outcome}
            unknownColor={donutColorMap.unknown}
            showDetail={selected}
          />
        </Rect>
      </Rect>
    );
  };
  
  export const registerReactNode = (G6) => {
    G6.registerNode("react-node", createNodeFromReact(ReactNode));
  };
  