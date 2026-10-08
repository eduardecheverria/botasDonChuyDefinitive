import './dosTiendasStyles.css'
import botasDonChuyCard from '../../assets/02-botas-don-chuy-card.png'
import reyProductosCard from '../../assets/03-el-rey-productos-vaqueros-card.png'
const DosTiendas = () => {
  return (
    <section>
      <h2 className="section-title">DOS TIENDAS, UN MISMO COMPROMISO</h2>

      <div className="stores">
        <article className="store-card">
          <div className="store-info">
            <h3>Botas Don Chuy</h3>
            <p>
              Botas vaqueras para trabajo, hebillas, vestir y uso diario.
              Calidad, comodidad y estilo en cada paso.
            </p>
            <a href="#categorias" className="btn btn-outline">Ver botas</a>
          </div>

          <img
            className="store-image"
            src={botasDonChuyCard}
            alt="Botas Don Chuy"
          />
        </article>

        <article className="store-card">
          <div className="store-info">
            <h3>El Rey</h3>
            <p>
              Sombreros, camisas, pantalones, cinturones y accesorios
              para completar tu look vaquero.
            </p>
            <a href="#categorias" className="btn btn-outline">Ver productos</a>
          </div>

          <img
            className="store-image"
            src={reyProductosCard}
            alt="El Rey de los Productos Vaqueros"
          />
        </article>
      </div>
    </section>
  )
}

export default DosTiendas
