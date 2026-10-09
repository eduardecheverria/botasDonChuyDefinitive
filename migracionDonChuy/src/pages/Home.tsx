import '../App.css'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Perks from '../components/Perks/Perks'
import DosTiendas from '../components/DosTiendas/DosTiendas'
import CategoriasHome from '../components/CategoriasHome/CategoriasHome'
import ProductosDestacados from '../components/ProductosDestacados/ProductosDestacados'
import Ubicacion from '../components/Ubicacion/Ubicacion'
import Footer from '../components/Footer/Footer'

function Home() {

  return (
    <>
      <Header />
      <Banner />
      <Perks />
      <DosTiendas />
      <CategoriasHome />
      <ProductosDestacados />
      <Ubicacion />
      <Footer />
    </>
  )
}

export default Home
