import React, { Component } from 'react';
import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown';
import HighchartsReact from 'highcharts-react-official';
import './styles.css';

drilldown(Highcharts);

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Basic drilldown'
  },
  xAxis: {
    type: 'category'
  },

  legend: {
    enabled: false
  },

  series: [
    {
      name: 'Things',
      colorByPoint: true,
      data: [
        {
          name: 'Animals',
          y: 5,
          drilldown: 'animals'
        },
        {
          name: 'Fruits',
          y: 2,
          drilldown: 'fruits'
        },
        {
          name: 'Cars',
          y: 4,
          drilldown: 'cars'
        }
      ]
    }
  ],
  drilldown: {
    series: [
      {
        id: 'animals',
        data: [['Cats', 4], ['Dogs', 2], ['Sheep', 2], ['Pigs', 1]]
      },
      {
        id: 'fruits',
        data: [['Apples', 4], ['Oranges',2]]
      },
      {
        id: 'cars',
        data: [['Toyota', 4], ['Opel', 2], ['Volkswagen', 2]]
      }
    ]
  }
};

class Geral extends Component {
  render() {
    return (
      <div className="Geral">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
 export default Geral;
