import React, { useEffect, useState } from 'react';
import './styles.css';
import Main from '../../components/Main';

import api from '../../services/api';

//import db from '../../data/dados_iniciais.json';


const Ativos = () => {
   const [data, setData] = useState();

  useEffect(() => {
    api.get('/units').then(response => setData(response.data));

    console.log(data);

  }, []);

  /* useEffect(() => {
    console.log(db);
    db.units[0].data.assetsData.map(item => console.log(item.name))
  }, []) */

  return (
    <Main />
   /* {
      db.units.map(item => <h1>item._id</h1>)
    }*/
  );
}

export default Ativos;
