import React, { Component, MouseEvent } from 'react';
import { BaseItem, CompoundItem } from '../helpers/items';

type InventoryItem = BaseItem | CompoundItem;

interface State {
  items: InventoryItem[];
  addItem: (item: InventoryItem) => void;
  removeItem: (index: number) => void;
}

const initialState: State = {
  items: [],
  addItem: () => {},
  removeItem: () => {}
};

export const InventoryContext = React.createContext<Readonly<State>>(
  initialState
);

export class InventoryProvider extends Component<{}, State> {
  readonly state: State = {
    items: [],
    addItem: (item: InventoryItem) => {
      this.setState(previousState => ({
        items: [...previousState.items, item]
      }));
    },
    removeItem: (index: number) => {
      this.setState(previousState => ({
        items: [
          ...previousState.items.slice(0, index),
          ...previousState.items.slice(index + 1)
        ]
      }));
    }
  };

  render() {
    return (
      <InventoryContext.Provider value={this.state}>
        {this.props.children}
      </InventoryContext.Provider>
    );
  }
}
