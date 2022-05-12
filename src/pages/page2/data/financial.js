// 资金账户
const financialData = {
    nodes: [
      {
        id: "son",
        label: "儿子",
        donutAttrs: {
          income: 50,
          outcome: 34,
          unknown: 10
        },
        nodeType: "account"
      },
      {
        id: "self",
        label: "吴大爷（自己）",
        // the attributes for drawing donut
        donutAttrs: {
          income: 10.2,
          outcome: 12.1,
          unknown: 0
        },
        nodeType: "account"
      },
      {
        id: "club1-person6",
        label: "小张",
        donutAttrs: {
          income: 30,
          outcome: 25,
          unknown: 25
        },
        nodeType: "account"
      },
      {
        id: "nf1",
        label: "网友1",
        donutAttrs: {
          income: 100,
          outcome: 100,
          unknown: 0
        },
        nodeType: "account"
      },
      {
        id: "nf2",
        label: "网友2",
        donutAttrs: {
          income: 20,
          outcome: 24,
          unknown: 3
        },
        nodeType: "account"
      },
      {
        id: "club1-person1",
        label: "刘大妈",
        donutAttrs: {
          income: 5,
          outcome: 7,
          unknown: 0
        },
        nodeType: "account"
      },
      {
        id: "shop1",
        label: "某商家1",
        donutAttrs: {
          income: 60,
          outcome: 40,
          unknown: 5
        },
        nodeType: "shop"
      },
      {
        id: "shop2",
        label: "某商家2",
        donutAttrs: {
          income: 90,
          outcome: 90,
          unknown: 0
        },
        nodeType: "shop"
      },
      {
        id: "shop3",
        label: "某商家3",
        donutAttrs: {
          income: 70,
          outcome: 45,
          unknown: 35
        },
        nodeType: "shop"
      },
      {
        id: "shop4",
        label: "某商家4",
        donutAttrs: {
          income: 90,
          outcome: 90,
          unknown: 0
        },
        nodeType: "shop"
      },
      {
        id: "bank2",
        label: "银行卡2",
        donutAttrs: {
          income: 90,
          outcome: 90,
          unknown: 0
        },
        nodeType: "bank"
      }
    ],
    edges: [
      { source: "son", target: "self", amount: 10 },
      { source: "self", target: "club1-person6", amount: 0.1 }, // 吴大爷 -> 小张
      { source: "club1-person6", target: "self", amount: 0.2 }, // 小张 -> 吴大爷
      { source: "self", target: "nf1", amount: 10 }, // 吴大爷 -> 网友
      { source: "nf1", target: "club1-person6", amount: 1.6 }, // 小张 -> 网友
      { source: "club1-person1", target: "club1-person6", amount: 0.05 }, // 刘大妈 -> 网友
      { source: "club1-person6", target: "club1-person1", amount: 0.1 }, // 刘大妈 -> 网友
      { source: "club1-person1", target: "nf1", amount: 6 }, // 刘大妈 -> 网友
      { source: "nf2", target: "shop2", amount: 5 },
      { source: "self", target: "shop1", amount: 1 },
      { source: "self", target: "shop3", amount: 1 },
      { source: "nf1", target: "shop2", amount: 28 }, // 网友 -> 商铺
      { source: "shop2", target: "shop4", amount: 28 }, // 商铺 -> 商铺
      { source: "shop4", target: "bank2", amount: 28 } // 商铺 -> 银行卡
    ]
  };
  
  export default financialData;
  