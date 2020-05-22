import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColors = () => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        console.log(res);
        //res.data
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getColors();
  }, []);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColors={getColors}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
