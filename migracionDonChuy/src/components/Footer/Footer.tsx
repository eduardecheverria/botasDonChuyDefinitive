import './footerStyles.css'

const Footer = () => {
  return (
    <footer id="contacto">
        <div>
        <h3>Botas Don Chuy | El Rey</h3>
        <p>
            Todo para el estilo vaquero: botas, sombreros, cinturones,
            ropa y accesorios.
        </p>
        </div>

        <div>
        <h3>Productos</h3>
        <a href="#categorias">Botas</a>
        <a href="#categorias">Sombreros</a>
        <a href="#categorias">Camisas</a>
        <a href="#categorias">Cinturones</a>
        </div>

        <div>
        <h3>Contacto</h3>
        <a href="https://wa.me/522212536873">WhatsApp</a>
        <a href="https://www.facebook.com/share/1bebQp2bo1/">Facebook</a>
        <a href="https://www.instagram.com/botasdonchuy_pue?igsh=ZTJrOWxjeWFrZHRo&utm_source=qr">Instagram</a>
        <a href="https://www.tiktok.com/@botas.don.chuy0?_r=1&_t=ZS-97ZHbkRYnNH">Tik tok</a>
        </div>

        <div id="sucursales">
        <h3>Sucursales</h3>
        <p>Consulta dirección y horarios.</p>
        <a href="#">Cómo llegar</a>
        </div>
    </footer>
  )
}

export default Footer
