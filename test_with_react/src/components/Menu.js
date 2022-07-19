import React from 'react';
import { Item } from './Item';

export const Menu = ({ burritos, orderItems, setOrderItems }) => (
  <section className="menu">
    <h2 className="menu__heading">Menu</h2>

    <div className="menu__items" data-testid="menu-items">
      {burritos.map(item => (
        <Item
          key={`${item.id}`}
          item={item}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
      ))}
    </div>
  </section>
);
