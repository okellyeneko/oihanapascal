import react from 'react'
import { Navbar, Contact} from '../components'
import { Footer } from '../container'
import '../App.scss'


function ContactPage (){
    return (
        <div className='app'>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage