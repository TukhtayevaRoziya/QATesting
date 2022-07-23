import React, { useState } from 'react';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick =()=> setToggle(prev=> !prev)


  return (
    <main>
      <h1 data-testid={'value-elem'}>{test}</h1>
      {toggle === true && <div data-testid={'toggle-elem'} style={{color: "red"}}>toggle</div>}
    Hello
    <button data-testid={'toggle-btn'} onClick={onClick}>send</button>
    <input onChange={e=>setValue(e.target.value)} placeholder='Inp Text'/>
    </main>
  );
};



export default App