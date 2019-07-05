import React, { FunctionComponent, useContext } from 'react';
import { InventoryContext } from '../contexts/inventory.context';
import { baseItems } from '../helpers/items';

export const ItemSelection: FunctionComponent = () => {
  const { addItem } = useContext(InventoryContext);
  const handleClick = item => {
    return () => addItem(item);
  };
  return (
    <div className="mb3">
      <h2 className="f3 lh-title mt0 mb4 measure">Add Base Items:</h2>
      <div className="flex flex-wrap items-center justify-around">
        {baseItems.map(item => (
          <div onClick={handleClick(item)} key={item.name}>
            <img
              className="mh3 pointer br4"
              src={item.imageUrl}
              title={`${item.name}\n${item.description}`}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
