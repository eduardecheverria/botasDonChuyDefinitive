import categoriaBotas from '../../assets/04-categoria-botas.png'
import categoriaSombreros from '../../assets/05-categoria-sombreros.png'
import categoriaCinturones from '../../assets/06-categoria-cinturones.png'
import categoriaCamisas from '../../assets/07-categoria-camisas.png'
import categoriaPantalones from '../../assets/08-categoria-pantalones.png'
import categoriaAccesorios from '../../assets/09-categoria-accesorios.png'
import categoriaRopaTrabajo from '../../assets/10-categoria-ropa-trabajo.png'
import categoriaHebillas from '../../assets/11-categoria-hebillas.png'
import './categoriasHomeStyles.css'

const CategoriasHome = () => {
  return (
    <section id="categorias">
      <h2 className="section-title">CATEGORÍAS PRINCIPALES</h2>

      <div className="categories">
        <article className="category">
          <img src={categoriaBotas} alt="Botas vaqueras" />
          <p>Botas</p>
        </article>

        <article className="category">
          <img src={categoriaSombreros} alt="Sombreros vaqueros" />
          <p>Sombreros</p>
        </article>

        <article className="category">
          <img src={categoriaCinturones} alt="Cinturones vaqueros" />
          <p>Cinturones</p>
        </article>

        <article className="category">
          <img src={categoriaCamisas} alt="Camisas vaqueras" />
          <p>Camisas</p>
        </article>

        <article className="category">
          <img src={categoriaPantalones} alt="Pantalones de mezclilla" />
          <p>Pantalones</p>
        </article>

        <article className="category">
          <img src={categoriaAccesorios} alt="Accesorios vaqueros" />
          <p>Accesorios</p>
        </article>

        <article className="category">
          <img src={categoriaRopaTrabajo} alt="Ropa de trabajo" />
          <p>Ropa de trabajo</p>
        </article>

        <article className="category">
          <img src={categoriaHebillas} alt="Productos para hebillas" />
          <p>Hebillas</p>
        </article>
      </div>
    </section>
  )
}

export default CategoriasHome
