import { useState, useEffect } from 'react';
import data from '../data.json'

function useStorage() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex( (index+1) % data.length );
  };

  const previous = () => {
    setIndex( (index-1+data.length) % data.length )
  };

  return [data, index, next, previous];
}

export default useStorage;