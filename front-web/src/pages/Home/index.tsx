import React from 'react';

import './styles.css';

import Footer from '../../Components/Footer';

import backgroundImg from '../../assets/main.svg';

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido que entregamos pra você!!!
            </h1>
            <h3 className="home-subtitle">
              Escolha o seu pedido e em poucos minutos levaremos na sua porta
            </h3>
            <a href="/orders" className="home-btn-order">Fazer Pedido</a>
          </div>
          <div className="home-image">
            <img src={backgroundImg} alt=""/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;
