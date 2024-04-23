import Navbar from '../../components/navbar/Navbar'
import { navOpts } from '../../interfaces/interfaces'

type ContactProps = {}

const ContactContent: React.FC<ContactProps> = () => {
   return (
      <>
         <Navbar children={undefined} items={navOpts} />
      </>
   )
}

export default ContactContent
