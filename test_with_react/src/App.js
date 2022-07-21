import React, { useState } from 'react';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const onClick =()=> setToggle(prev=> !prev)


  return (
    <main>
      {toggle === true && <div data-testid={'toggle-elem'} style={{color: "red"}}>toggle</div>}
    Hello
    <button data-testid={'toggle-btn'} onClick={onClick}>send</button>
    <input placeholder='Inp Text'/>
    </main>
  );
};



export default App