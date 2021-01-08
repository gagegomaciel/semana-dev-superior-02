import React, { useEffect, useState } from 'react';

import './styles.css';

import StepsHeader from '../../Components/HeaderSteps';
import Products from '../../Components/ProductsList';

import api from '../../services/api';

import { Product } from '../../@Types/types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get(`products`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <Products products={products} />
      </div>
    </>
  )
}

export default Orders;
