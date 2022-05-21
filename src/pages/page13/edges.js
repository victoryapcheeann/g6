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






  