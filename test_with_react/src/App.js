import React, { useState } from 'react';
import Button from './button/Button';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('Tr');

  const onClick =()=> setToggle(prev=> !prev)


  return (
    <>
      <h1 data-testid={'value-elem'}>{value}</h1>
      {/* {toggle === true && <div data-testid={'toggle-elem'} style={{color: "red"}}>toggle</div>}
    Hello
    <button data-testid={'toggle-btn'} onClick={onClick}>send</button> */}
    <input onChange={e=>setValue(e.target.value)} placeholder='Inp Text'/>
    <Button label={'click me please!'}/>
    </>
  );
};



export default App