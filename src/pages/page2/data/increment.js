// 资金账户
const incrementData = {
    nodes: [
      {
        id: "person1",
        label: "人物1",
        donutAttrs: {
          income: 50,
          outcome: 34,
          unknown: 10
        },
        nodeType: "account",
        level: 1
      },
      {
        id: "person2",
        label: "人物2",
        donutAttrs: {
          income: 50,
          outcome: 34,
          unknown: 10
        },
        nodeType: "account",
        level: 1
      },
      {
        id: "person3",
        label: "人物3",
        donutAttrs: {
          income: 50,
          outcome: 34,
          unknown: 10
        },
        nodeType: "account",
        level: 1
      },
      {
        id: "person4",
        label: "人物4",
        donutAttrs: {
          income: 50,
          outcome: 34,
          unknown: 10
        },
        nodeType: "account",
        level: 1
      }
    ],
    edges: [
      { source: "person4", target: "person2", amount: 0.8 },
      { source: "person2", target: "person4", amount: 1.6 },
      { source: "nf2", target: "person2", amount: 20 },
      { target: "person1", source: "nf2", amount: 20 },
      { source: "person3", target: "nf1", amount: 20 },
      { source: "person4", target: "nf2", amount: 20 },
      { source: "person1", target: "shop2", amount: 20 }
    ]
  };
  
  export default incrementData;
  