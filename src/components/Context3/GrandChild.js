import React, { useContext } from 'react';
import RootContext from './RootContext';

const GrandChild = () => {
  const data = useContext(RootContext);
  return (
    <div>
      <p>{data.number}</p>
      <p>{data.text}</p>
      <p><button onClick={data.func}>A button</button></p>
    </div>
  )
}

export default GrandChild