import React, { Component } from 'react';
import api from '../../services/api';
//import Ativos from '../../pages/Ativos';
// import { Container } from './styles';

export default class Listagem extends Component {
  state = {
    ativos: []
  };

  componentDidMount() {
    this.loadAtivos();
  }

  loadAtivos = async () => {
    const response = await api.get('/ativos')

    this.setState({ ativos: response.data.docs});
  };

  render () {
  return (
    <div className="ativos-list">
      {this.state.ativos.map(ativos => (
        <article key={ativos._id}>
          <strong> {ativos.title} </strong>
          <p>{ativos.description} </p>

          <a href="">Acessar</a>
        </article>
      ))}
    </div>
   );
  }
}


