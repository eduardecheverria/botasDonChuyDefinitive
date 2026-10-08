import './headerStyles.css'
import logosheader from '../../assets/logos-header.png'

const Header = () => {
  return (
  <header>
    <div className="menu">☰</div>

    <div className="logos">
      <a href="#inicio" className="logos-link">
        <img
          src={logosheader}
          alt="Botas Don Chuy y El Rey de los Productos Vaqueros"
          className="logos-header-img"
        />
      </a>
    </div>

    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#categorias">Categorías</a>
      <a href="#destacados">Destacados</a>
      <a href="#sucursales">Sucursales</a>
      <a href="https://wa.me/522212536873" className="btn"><i className="fa-brands fa-whatsapp"></i> Enviar WhatsApp</a>
    </nav>
  </header>
  )
}

export default Header
