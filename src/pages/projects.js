import react from 'react'
import { Navbar, Work} from '../components'
import { Footer } from '../container'
import '../App.scss'


function Projects (){
    return (
        <div className='app'>
            <Navbar />
            <Work />
            <Footer />
        </div>
    )
}

export default Projects