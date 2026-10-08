import React, { useState, useEffect } from 'react';
import './bannerStyles.css'
import banner1 from '../../assets/01-hero-botas-sombrero-cinturon.png'
import banner2 from '../../assets/02-hero-botas-sombrero-cinturon.jpeg'
import banner3 from '../../assets/03-hero-botas-sombrero-cinturon.jpeg'
const images = [
  banner1,
  banner2,
  banner3,
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
    
    useEffect(() => {
    const interval = setInterval(() => {
      // 1. Activa la transición de desvanecimiento (opacidad a 0)
      setIsFading(true);

      setTimeout(() => {
        // 2. Cambia la imagen cuando está oculta
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // 3. Restaura la opacidad para mostrar la nueva imagen
        setIsFading(false);
      }, 500); // Sincronizado con los 500ms de la transición CSS
    }, 3000); // Cada 3 segundos

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);
    
  return (
      <section className="hero" id="inicio">
          
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url('${images[currentIndex]}')`,
          opacity: isFading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          position: 'absolute',
          inset: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      <div className="hero-content">
        <h1>
          El estilo vaquero
          <span>empieza aquí</span>
        </h1>

        <p>
          Botas, sombreros, cinturones y ropa vaquera para trabajo,
          hebillas y todos los días.
        </p>

        <div className="hero-buttons">
          <a href="#destacados" className="btn">Ver productos</a>
          <a href="https://wa.me/522212536873" className="btn btn-outline">
            <i className="fa-brands fa-whatsapp"></i>
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner
