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
          y: 8,
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
        data: [['Servo Motor #SM354', 4], ['Servo Motor #SM359', 2], ['Servo Motor #SM64', 2]]
      },
      {
        id: 'em manutenção',
        data: [['Bomba Hidraúlica CXS7-369', 4], ['Servo Motor #SM375',2]]
      },
      {
        id: 'disponíveis',
        data: [['Servo Motor #SM36', 4], ['Mancal #MA362', 2], ['Mancal #MA264', 2]]
      },
      {
        id: 'alerta',
        data: [['Servo Motor #SM32', 4], ['Bomba Hidráulica CXS7-99993', 2], ['CAER 3X13', 2]]
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
