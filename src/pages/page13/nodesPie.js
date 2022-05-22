import G6 from '@antv/g6';
import Chart from '@antv/chart-node-g6';

const pieChart = {
    draw(cfg, group) {
      const keyShape = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          r: 100,
          fill: cfg.style.fill,
          stroke: cfg.style.stroke,
          width: 400,
          height: 200,
          fillOpacity: 0,
        },
      });

      // 实际开发中把 (Chart || window.Chart) 换成 Chart
      // Replace (Chart || window.Chart) by Chart in your project
      const view = new (Chart || window.Chart)({
        group,
        width: 400,
        height: 200,
        x: -100,
        y: 0,
      });
      
      const trendData = [
        { year: '2001', population: 41.8 },
        { year: '2002', population: 38 },
        { year: '2003', population: 33.7 },
        { year: '2004', population: 30.7 },
        { year: '2005', population: 25.8 },
        { year: '2006', population: 31.7 },
        { year: '2007', population: 33 },
        { year: '2008', population: 46 },
        { year: '2009', population: 38.3 },
        { year: '2010', population: 28 },
        { year: '2011', population: 42.5 },
        { year: '2012', population: 30.3 },
      ];
      
      view.data(trendData);

      view
        .interval()
        .position('year*population')
        .label('year', {
          offset: -15,
        })
        .color('year')
        .style({
          lineWidth: 1,
          stroke: '#95de64',
          fontSize: 8,
        });

      view.axis(false);

      view.legend(false);

      // 极坐标下的柱状图
      view.coordinate('polar');

      view.render();

      keyShape.set('intervalView', view);

      return keyShape;
    },
    update(cfg, item) {
      const keyShape = item.getKeyShape();
      const view = keyShape.get('intervalView');
      view.changeData(cfg.trendData);
    },
  }

export const registerPieChart = (G6) => {
    G6.registerNode(
        'node-with-pie',
        pieChart,
        'single-node',
      );      
};
