import React, { useEffect, useState } from 'react';

import './styles.css';

import StepsHeader from '../../Components/HeaderSteps';
import Products from '../../Components/ProductsList';
import OrderLocation from '../../Components/OrderLocation/OrderLocation';

import api from '../../services/api';

import { OrderLocationData, Product } from '../../@Types/types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] =  useState<OrderLocationData>();

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
        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
      </div>
    </>
  )
}

export default Orders;
