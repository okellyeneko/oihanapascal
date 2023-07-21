import React from 'react'
import './Footer.scss'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div className='footerDiv'>
        <div className='contactInfo'>
                <div className='tradInfo'>
                    <div className='emailInfo'>
                        <img src={images.email} alt="email"/>
                        <a href="mailto:oihanapascal@gmail.com">oihanapascal@gmail.com</a>
                    </div>
                    <div className='mobileInfo'>
                        <img src={images.mobile} alt="mobile"/>
                        <a href="tel: +33 7 82 22 89 44">+33 7 82 22 89 44</a>
                    </div>
                </div>
                <div className='socialMediaInfo'>
                    <div className='socials'>
                        <img src={images.instagram} alt="instagram"/>
                        <a href='https://www.instagram.com/oihanapascal/'>@oihanapascal</a>
                    </div>
                    <div className='socials'>
                        <img src={images.linkedin} alt="linkedin"/>
                        <a href='https://fr.linkedin.com/in/oihana-pascal-63715b18b'>LinkedIn</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer