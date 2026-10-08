import './perksStyles.css'

const Perks = () => {
  return (
    <div className="features">
      <div className="feature">
        <i className="fa-solid fa-award"></i>
        <span>Productos de<br/>calidad</span>
      </div>
    
      <div className="feature">
        <i className="fa-regular fa-user"></i>
        <span>Atención<br/>personalizada</span>
      </div>
    
      <div className="feature">
        <i className="fa-solid fa-people-group"></i>
        <span>Variedad para toda<br/>la familia</span>
      </div>
    
      <div className="feature">
        <i className="fa-solid fa-truck-fast"></i>
        <span>Envíos y entregas<br/>locales</span>
      </div>
    
      <div className="feature">
        <i className="fa-brands fa-whatsapp"></i>
        <span>Compra segura por<br/>WhatsApp</span>
      </div>
    
      <div className="feature">
        <i className="fa-regular fa-user"></i>
        <span>Experiencia en<br/>productos vaqueros</span>
      </div>
    </div>
  )
}

export default Perks
