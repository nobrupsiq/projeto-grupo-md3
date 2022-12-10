import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "./Carousel.css"

function Slider() {
  return (
    <div className='Carousel-parent'>
      <Carousel style={{height:"50vh"}}>
        <Carousel.Item interval={4000}>
          <div className='bloco'>
            <h1>Pantera negra</h1>
            <p>Mais vendido</p>
          </div>
          <img
            src="https://c.wallhere.com/photos/01/41/Black_Panther_Avenger_action_figures-1335921.jpg!d"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className='bloco'>
            <h1>Em breve...</h1>
            <p>Creed III</p>
          </div>
          <img
            src="https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/creed-ii/10062020/2048/background-creed-ii.jpg"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className='bloco'>
            <h1>Lançamento</h1>
            <p>Adão Negro</p>
          </div>
          <img
            src="https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/344fd592-38fc-11ed-aa6e-9587410378a2/chrome_2022-09-20_12-51-51.png"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
