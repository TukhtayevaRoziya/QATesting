import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const onClick =()=> setToggle(prev=> !prev)

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 1000);
  }, []);


  return (
    <main>
      {data && <div style={{color: "red"}}>data</div>}
    Hello
    <button onClick={onClick}>send</button>
    <input placeholder='Inp Text'/>
    </main>
  );
};

export default App