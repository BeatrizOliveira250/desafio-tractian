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
    text: 'Dashboard'
  },
  xAxis: {
    type: 'category'
  },

  legend: {
    enabled: false
  },

  series: [
    {
      name: 'Ativos',
      colorByPoint: true,
      data: [
        {
          name: 'EM USO',
          y: 10,
          drilldown: 'em uso'
        },
        {
          name: 'EM MANUTENÇÃO',
          y: 2,
          drilldown: 'em manutenção'
        },
        {
          name: 'DISPONÍVEIS',
          y: 4,
          drilldown: 'disponíveis'
        },
        {
          name: 'ALERTA',
          y: 4,
          drilldown: 'alerta'
        }
      ]
    }
  ],
  drilldown: {
    series: [
      {
        id: 'em uso',
        data: [['Cats', 4], ['Dogs', 2], ['Sheep', 2], ['Pigs', 1], ['Dogshg', 10]]
      },
      {
        id: 'em manutenção',
        data: [['Apples', 4], ['Oranges',2]]
      },
      {
        id: 'disponíveis',
        data: [['Toyota', 4], ['Opel', 2], ['Volkswagen', 2]]
      },
      {
        id: 'alerta',
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
