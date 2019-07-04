import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { baseItems } from '../helpers/items';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="f4 fw6 f1-ns lh-title measure mt0">
      <span role="image">🚧</span> Under Construction{' '}
      <span role="image">🚧</span>
    </h1>
    <h2 className="f4 lh-copy mt0 mb4 measure">Add Base Items:</h2>
    <div className="flex flex-wrap items-center justify-around">
      {baseItems.map(item => (
        <img
          className="mh3 pointer br4"
          src={item.imageUrl}
          title={`${item.name}\n${item.description}`}
          alt={item.name}
        />
      ))}
    </div>
    <div className="flex flex-wrap">
      <div className="w-100 w-20-ns">
        <h2 className="f4 lh-copy mt0 mb4 measure tc">Your Inventory:</h2>
      </div>
      <div className="w-100 w-80-ns">
        <h2 className="f4 lh-copy mt0 mb4 measure tc">Potential Items:</h2>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
