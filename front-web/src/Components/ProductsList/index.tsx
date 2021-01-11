import React from 'react';
import { Product } from '../../@Types/types';

import ProductsCard from '../../Components/ProductCards';

import './styles.css';

type Props = {
  products: Product[];
}

function Products({ products }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products;
