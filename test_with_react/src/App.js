import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { Order } from './components/Order';
import burritos from './data';

export const spiceEmoji = spice => '🌶️'.repeat(spice);

export const App = () => {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <main>
 Hello
    </main>
  );
};
