import './Home.css'
import Header from '../../components/header/Header'
import HomeContent from './HomeContent'
import Navbar from '../../Navbar'
import { navOpts } from '../../interfaces/interfaces'
import Footer from '../../components/footer/Footer'

function Home() {
   return (
      <>
         <Navbar children={undefined} items={navOpts} />
         <Header />
         <HomeContent />
      </>
   )
}

export default Home
