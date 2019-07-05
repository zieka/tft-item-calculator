import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Inventory } from '../components/inventory.component';
import { InventoryProvider } from '../contexts/inventory.context';
import { ItemSelection } from '../components/item-selection.component';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <InventoryProvider>
        <h1 className="f4 fw6 f1-ns lh-title measure mt0">
          <span role="image">🚧</span> Under Construction{' '}
          <span role="image">🚧</span>
        </h1>
        <ItemSelection />
        <div className="flex flex-wrap">
          <div className="w-100 w-25-ns">
            <h2 className="f4 lh-copy mt0 mb4 measure tl">Your Inventory:</h2>
            <Inventory></Inventory>
          </div>
          <div className="w-100 w-75-ns">
            <h2 className="f4 lh-copy mt0 mb4 measure tc">Potential Items:</h2>
          </div>
        </div>
      </InventoryProvider>
    </Layout>
  );
};

export default IndexPage;
