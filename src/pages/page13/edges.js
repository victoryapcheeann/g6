const lineGrowth = {
    afterDraw(cfg, group) {
      const shape = group.get('children')[0];
      const length = shape.getTotalLength();
      shape.animate(
        (ratio) => {
          // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
          const startLen = ratio * length;
          // Calculate the lineDash
          const cfg = {
            lineDash: [startLen, length - startLen],
          };
          return cfg;
        },
        {
          repeat: true, // Whether executes the animation repeatly
          duration: 2000, // the duration for executing once
        },
      );
    },
}

const lineDash = [4, 2, 1, 2];
const lineDashing =  {
    afterDraw(cfg, group) {
      // get the first shape in the group, it is the edge's path here=
      const shape = group.get('children')[0];
      let index = 0;
      // Define the animation
      shape.animate(
        () => {
          index++;
          if (index > 50) {
            index = 0;
          }
          const res = {
            lineDash,
            lineDashOffset: -index,
          };
          // returns the modified configurations here, lineDash and lineDashOffset here
          return res;
        },
        {
          repeat: true, // whether executes the animation repeatly
          duration: 20000, // the duration for executing once
        },
      );
    },
  }

const circleRunning =  {
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
  }

  const extraShapeEdge =  {
    afterDraw(cfg, group) {
      // get the first shape in the graphics group of this edge, it is the path of the edge here
      // 获取图形组中的第一个图形，在这里就是边的路径图形
      const shape = group.get('children')[0];
      // get the coordinate of the mid point on the path
      // 获取路径图形的中点坐标
      const midPoint = shape.getPoint(0.5);
      const rectColor = cfg.midPointColor || '#333';
      // add a rect on the mid point of the path. note that the origin of a rect shape is on its lefttop
      // 在中点增加一个矩形，注意矩形的原点在其左上角
      group.addShape('rect', {
        attrs: {
          width: 10,
          height: 10,
          fill: rectColor || '#333',
          // x and y should be minus width / 2 and height / 2 respectively to translate the center of the rect to the midPoint
          // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
          x: midPoint.x - 5,
          y: midPoint.y - 5,
        },
      });

      // get the coordinate of the quatile on the path
      // 获取路径上的四分位点坐标
      const quatile = shape.getPoint(0.25);
      const quatileColor = cfg.quatileColor || '#333';
      // add a circle on the quatile of the path
      // 在四分位点上放置一个圆形
      group.addShape('circle', {
        attrs: {
          r: 5,
          fill: quatileColor || '#333',
          x: quatile.x,
          y: quatile.y,
        },
      });
    },
    update: undefined,
  }

export const registerExtraShapeEdge = (G6) => { 
  G6.registerEdge(
    'extra-shape-edge',
     extraShapeEdge,
    'line',
  );
}

export const registerLineGrowth= (G6) => {
    G6.registerEdge(
        'line-growth',
        lineGrowth,
        'cubic', // extend the built-in edge 'cubic'
    );
};

export const registerLineDashing= (G6) => {
    G6.registerEdge(
        'line-dash',
        lineDashing,
        'cubic', // extend the built-in edge 'cubic'
    );
};

export const registerCircleRunning= (G6) => {
    G6.registerEdge(
        'circle-running',
        circleRunning,
        'cubic', // https://g6.antv.vision/en/docs/manual/middle/elements/edges/built-in/quadratic
    );
};






  