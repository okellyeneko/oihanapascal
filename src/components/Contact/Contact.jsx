import React, {useState, useEffect} from 'react'
import { images } from '../../constants'
import { client } from '../../client'
import './Contact.scss'

const Contact = () => {

    const [formData, setFormData] = useState({name:'', email:'', message:''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const {name, email, message} = formData
    const handleChangeInput = (e) => {
        const {name, value} = e.target

        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = () => {
        setLoading(true)

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(contact)
        .then(()=> {
            setLoading(false)
            setIsFormSubmitted(true)
        })

    }

    return (
        <>
        <div className='contactPage'>
            <div>
                <p className='pageTitle'>CONTACT</p>
            </div>
            {!isFormSubmitted ?
            <div className='contactForm'>
                                <p className='pageDesc'>venez discuter de votre projet, vos idées, vos envies</p>
                <div>
                    <input type='text' placeholder='Votre Nom' name='name' value={name} onChange={handleChangeInput}/>
                </div>
                <div>
                    <input type='email' placeholder='Votre email' name='email' value={email} onChange={handleChangeInput}/>
                </div>
                <div>
                    <textarea 
                        className="p-text" 
                        placeholder='Votre message'
                        name="message" 
                        value={message}
                        onChange={handleChangeInput}
                    />
                </div>
                <button type='button' onClick={handleSubmit}>{loading ? 'Envoi en cours': 'Envoyer le message' }</button>
            </div>
            : <div>
                <h3 className='head-text'>Merci pour votre message!</h3>
            </div>}
        </div>
        </>
    )
}

export default Contact