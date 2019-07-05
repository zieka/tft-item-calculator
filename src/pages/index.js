import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Inventory } from '../components/inventory.component';
import { InventoryProvider } from '../contexts/inventory.context';
import { ItemSelection } from '../components/item-selection.component';
import { ItemGrid } from '../components/item-grid.component';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <InventoryProvider>
        <ItemSelection />
        <div className="flex flex-wrap">
          <div className="w-100 w-25-ns">
            <h1 className="f3 lh-title mt0 mb4 measure tl">Your Inventory:</h1>
            <Inventory></Inventory>
          </div>
          <div className="w-100 w-75-ns">
            <h1 className="f3 lh-title mt0 mb4 measure tc">Potential Items:</h1>
            <ItemGrid />
          </div>
        </div>
      </InventoryProvider>
    </Layout>
  );
};

export default IndexPage;
