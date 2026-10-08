import './UbicacionStyles.css'

const Ubicacion = () => {
  return (
  
    <section className="location" id="sucursales">

      <div className="location-content">
  
          <span className="location-subtitle">
              <i className="fa-solid fa-location-dot"></i>
              VISÍTANOS
          </span>
  
          <h2>Encuentra nuestra tienda</h2>
  
          <p>
              Ven a conocer nuestra gran variedad de botas, sombreros,
              cinturones, ropa vaquera y accesorios.
          </p>
  
          <div className="location-list">
  
            <div className="location-item">

              <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
              </div>
          
              <div>
                  <h4>Dirección</h4>
          
                  <span>
                      Av. Reforma 904<br/>
                      Centro Histórico<br/>
                      Heroica Puebla de Zaragoza, Puebla
                  </span>
          
              </div>
          
          </div>
  
              <div className="location-item">
  
                  <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                  </div>
  
                  <div>
  
                      <h4>Teléfono</h4>
  
                      <span>221 253 6873</span>
  
                  </div>
  
              </div>
  
              <div className="location-item">
  
                  <div className="icon">
                      <i className="fa-solid fa-clock"></i>
                  </div>
  
                  <div>
  
                      <h4>Horario</h4>
  
                      <span>
                          Lunes a Domingo<br/>
                          9:00 AM - 8:00 PM
                      </span>
  
                  </div>
  
              </div>
  
          </div>
  
          <div className="location-buttons">
  
              <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="btn">
  
                  <i className="fa-solid fa-paper-plane"></i>
                  &nbsp;Cómo llegar
  
              </a>
  
              <a
                  href="https://wa.me/522212536873"
                  target="_blank"
                  className="btn btn-outline">
  
                  <i className="fa-brands fa-whatsapp"></i>
                  &nbsp;WhatsApp
  
              </a>
  
          </div>
  
      </div>
  
      <div className="location-map">
  
        <iframe
          src="https://maps.google.com/maps?q=Av.%20Reforma%20904,%20Centro,%20Heroica%20Puebla%20de%20Zaragoza,%20Puebla&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: "0", borderRadius: "22px" }}
          allowFullScreen
          loading="lazy">
        </iframe>
  
      </div>
  
  </section>
  )
}

export default Ubicacion
