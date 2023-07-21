import React, {useState, useEffect} from 'react'
import './Sum.scss'
import {motion} from 'framer-motion'
import {AiFillEye, AiOutlineFilePdf} from 'react-icons/ai'
import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper'

const About = () => {
  
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data)=> {setWorks(data)})
  }, [])

  return (
    <>
      <h2 className='sum-head head-text'>Quelques projects</h2>

      <div className='app__profiles'>
        {works.map((work, index)=> {
          if(index === 0 || index === 2 || index === 3) {
            return (
            <div>
              <motion.div
              whileInView={{Opacity: 1}}
              whileHover={{scale: 1.05}}
              transition={{duration: 0.1, type: 'tween'}}
              className='sum-item'
              key={work.title + index}
              >
                <img src={urlFor(work.imgUrl)} alt="work.title" />
                <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: 0.25, ease: 'easeIn', staggerChildren: 0.5}}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='blank' rel='noreferrer'>
                  <motion.div
                  whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                {/* <a href={work.codeLink}>
                  <motion.div
                  whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiOutlineFilePdf/>
                  </motion.div>
                </a> */}
              </motion.div>
                <h2 className='bold-text' style={{marginTop: 20, color: "white"}}>{work.title}</h2>
                <p className='p-text'>{work.tags[0]}</p>
              </motion.div>
            </div>)
          }
        })}
      </div>

      <div className='moreDiv'>
        <a href="/projects">
          <button className='moreBtn'>+ DE PROJETS</button>
        </a>
      </div>

    </>
  )
}



export default AppWrap(About, 'about')