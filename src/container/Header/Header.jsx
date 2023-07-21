import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AppWrap} from '../../wrapper'

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div  
      whileInView={{x: [0], opacity: [0,1]}}
      transition={{duration: 2}}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div className="badge-text">
              <h1 className="head-text">DESIGNER</h1>
              <h1 className="head-text">GRAPHIQUE</h1>
            </div>
          </div>
            <div className="tag-cmp app__flex">
              <h1 className="head-text">OIHANA</h1>
              <h1 className="head-text">PASCAL</h1>
            </div>

        </div>
        
      </motion.div>


    </div>
  )
}

export default AppWrap(Header, 'home')