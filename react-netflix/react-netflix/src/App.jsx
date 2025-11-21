import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyNavbar from './components/MyNavbar.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import GalleriaProva from './components/GalleriaProva.jsx'

function App() {
  
  return (
    <>
      <MyNavbar/>
      {/* <Gallery/> */}
      <GalleriaProva/>
      <Footer/>
    </>
  )
}

export default App
