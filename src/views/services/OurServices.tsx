import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { navOpts } from '../../interfaces/interfaces'

import '../home/Home.css'
import Content from './Content'

const OurServices = () => {
   return (
      <>
         <div
            style={{
               background:
                  'linear-gradient(90deg, rgba(57,92,130,1) 0%, rgba(15,54,97,1) 100%)',
            }}
         >
            <Navbar children={undefined} items={navOpts} />
            <Content />
            <Footer />
         </div>
      </>
   )
}

export default OurServices
