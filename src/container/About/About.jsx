import React, {useState, useEffect} from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper'

const About = () => {
  
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data)=> {setAbouts(data)})
  }, [])

  return (
    <>
    <div className='aboutDiv'>
      <div className='imgDiv'>
        <motion.img src="https://media.licdn.com/dms/image/C5603AQGvbvUZGswBGA/profile-displayphoto-shrink_800_800/0/1563399038429?e=2147483647&v=beta&t=shhU2CdEunOgW_XZpRGmrcvKgLktXNy5HYUtTyoFu3Q" alt="" 
        whileInView={{scale: [0.95, 1]}}
        transition={{duration: 2, ease:'easeInOut'}}
        />
      </div>
      <div className='aboutContent'>

        <motion.div
              whileInView={{scale: [0.8, 1], opacity: [0,1], y:[20, 0]}}
              transition={{duration: 2, ease:'easeInOut'}}
        >
          <h1>Hello!</h1>
        </motion.div>
        <p>Je suis graphiste freelance basée au pays basque. <br />
        <br />
          Je vous accompagne dans la création ou dans la réalisation de vos projets visuels, qu'il s'agisse de la création de votre identité de marque, de la mise en page de vos supports de communication, ou du lancement de votre communication sur les réseaux sociaux.
          <br /><br />Venez discuter de votre projet.
        </p>
        <div className='contactLink'>
          <a href="/contact">
            <button className='contactBtn'>Contacter</button>
          </a>
        </div>
      </div>
    </div>
    <div className='line'></div>
    </>
  )
}

export default AppWrap(About, 'about')