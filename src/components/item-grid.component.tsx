import React, { FunctionComponent, useContext } from 'react';
import { InventoryContext, InventoryItem } from '../contexts/inventory.context';
import { compoundItems } from '../helpers/items';

export const ItemGrid: FunctionComponent = () => {
  const { items } = useContext(InventoryContext);
  const uniqueItems: InventoryItem[] = items.reduce((result, current) => {
    return result.includes(current) ? result : [...result, current];
  }, []);
  return (
    <table className="w-auto tc center">
      <tbody>
        <tr>
          {items.length > 0 && (
            <th className="bg-black center v-mid pa2 w3 h3"></th>
          )}
          {uniqueItems.map(item => {
            return (
              <th
                key={item.name}
                className="bg-moon-gray center v-mid pa2 w3 h3"
              >
                <img
                  className="br3"
                  src={item.imageUrl}
                  title={`${item.name}\n${item.description}`}
                  alt={item.name}
                  key={item.name}
                  height={40}
                />
              </th>
            );
          })}
        </tr>
        {uniqueItems.map(item => {
          return (
            <tr key={item.name}>
              <td className="bg-moon-gray center v-mid pa2 w3 h3">
                <img
                  className="br3"
                  src={item.imageUrl}
                  title={`${item.name}\n${item.description}`}
                  alt={item.name}
                  key={item.name}
                  height={40}
                />
              </td>
              {uniqueItems.map(i => {
                if (
                  i.name === item.name &&
                  items.filter(a => a == item).length < 2
                ) {
                  return <td className="bg-gray center v-mid pa2 w3 h3"></td>;
                }
                const mappedItem = compoundItems[i.buildsIntoMap[item.name]];
                return (
                  <td
                    key={mappedItem.name}
                    className="bg-lightest-blue center v-mid pa2 w3 h3"
                  >
                    <img
                      className="br3"
                      src={mappedItem.imageUrl}
                      title={`${mappedItem.name}\n${mappedItem.description}`}
                      alt={mappedItem.name}
                      key={mappedItem.name}
                      height={40}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// if (items.filter(item => item == current).length > 1) {
//     return result.includes(current) ? result : [...result, current];
//   }
