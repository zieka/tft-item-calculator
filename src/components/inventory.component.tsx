import React, { FunctionComponent, useContext } from 'react';
import { InventoryContext } from '../contexts/inventory.context';

export const Inventory: FunctionComponent = () => {
  const { items, removeItem } = useContext(InventoryContext);
  return (
    <div>
      {items.map((item, index) => (
        <div onClick={() => removeItem(index)} className="dib">
          <img
            className="mr1 pointer br4"
            src={item.imageUrl}
            title={`${item.name}\n${item.description}`}
            alt={item.name}
            key={item.name}
          />
        </div>
      ))}
    </div>
  );
};
