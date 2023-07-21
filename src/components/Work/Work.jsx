import React, {useState, useEffect} from 'react'
import {AiFillEye, AiOutlineFilePdf} from 'react-icons/ai'
import {animate, motion} from 'framer-motion'
import { urlFor, client } from '../../client' 
import './Work.scss'

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('Tout')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1})
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [fileURL, setFileURL] = useState([])

  useEffect(() => {
    const query = `*[_type == 'works']`

    client.fetch(query)
    .then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])
 

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{y:100, opacity:0}])

    setTimeout(()=> {
      setAnimateCard([{y:0, opacity: 1}])

      if(item === 'Tout') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }
  return (
    <div className="app__wrapper app__flex">
    <>
      <p className='main-title'>PROJETS</p>

      <div className='app__work-filter'>
        {['Tout', 'Identité visuelle', 'Affiche', 'Logo', 'Dépliant', 'Typographie', 'Packaging', 'Illustration', 'Web design'].map((item, index)=>(
          <div
            key={index}
            onClick={()=> handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate= {animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index)=> (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
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

            </div>

            <div className='app__work-content'>
              <h4>{work.title}</h4>
              <p>{work.tags[0]}</p>
              {/* <p style={{marginTop: 10}}>{work.description}</p> */}
            </div>

          </div>
        ))}
      </motion.div>
    </>
    </div>
  )
}

export default Work