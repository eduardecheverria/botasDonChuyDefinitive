import categoriaBotas from '../../assets/04-categoria-botas.png'
import categoriaSombreros from '../../assets/05-categoria-sombreros.png'
import categoriaCamisas from '../../assets/07-categoria-camisas.png'
import categoriaPantalones from '../../assets/08-categoria-pantalones.png'
import './ProductosDestacadosStyles.css'

const ProductosDestacados = () => {
  return (
    <section id="destacados">
      <h2 className="section-title">PRODUCTOS DESTACADOS</h2>

      <div className="products">
        <article className="product">
          <div className="product-img">
            <img src={categoriaBotas} alt="Bota vaquera clásica" />
          </div>
          <div className="product-info">
            <h3>Bota vaquera clásica</h3>
            <p>Ideal para trabajo, vestir o hebillas.</p>
            <a href="https://wa.me/522212536873" className="btn">Pedir por WhatsApp</a>
          </div>
        </article>

        <article className="product">
          <div className="product-img">
            <img src={categoriaSombreros} alt="Sombrero vaquero" />
          </div>
          <div className="product-info">
            <h3>Sombrero vaquero</h3>
            <p>Estilo tradicional para toda ocasión.</p>
            <a href="https://wa.me/522212536873" className="btn">Pedir por WhatsApp</a>
          </div>
        </article>

        <article className="product">
          <div className="product-img">
            <img src={categoriaCamisas} alt="Camisa vaquera" />
          </div>
          <div className="product-info">
            <h3>Camisa vaquera</h3>
            <p>Comodidad y presencia para tu día.</p>
            <a href="https://wa.me/522212536873" className="btn">Pedir por WhatsApp</a>
          </div>
        </article>

        <article className="product">
          <div className="product-img">
            <img src={categoriaPantalones} alt="Pantalón de mezclilla" />
          </div>
          <div className="product-info">
            <h3>Pantalón de mezclilla</h3>
            <p>Resistente para trabajo y uso diario.</p>
            <a href="https://wa.me/522212536873" className="btn">Pedir por WhatsApp</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProductosDestacados
