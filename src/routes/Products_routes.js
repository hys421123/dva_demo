import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import ComponentProductList from '../components/ComponentProductList';


const Products_routes = ({ dispatch, productsmodels }) => {
  function handleDelete(id) {
    dispatch({
      type: 'productsmodels/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ComponentProductList onDelete={handleDelete} products={productsmodels} />
    </div>
  );
};

// export default Products;
export default connect(({ productsmodels}) => ({
  productsmodels,
}))(Products_routes);