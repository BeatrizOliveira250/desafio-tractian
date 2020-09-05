import React, {useEffect, useState} from 'react';
import './styles.css';
import Main from '../../components/Main';

import api from '../../services/api';




const Ativos = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const response = api.get('/posts');
    setData(response.data);

    console.log(data);
  }, []);

    return (
      <Main />
    );
  }

export default Ativos;
