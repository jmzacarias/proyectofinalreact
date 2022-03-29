import { useState } from 'react'
import './CustomerForm.css';

const ContactForm = ({ toggleVisibility, setCustomer}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
        }
        setCustomer(objContact)
        setName('')
        setPhone('')
        setAddress('')
    }
    return (
        <div className='formulario'>
          <h2>Contacto</h2>
          <form onSubmit={handleContactForm}>
            <label>Nombre y Apellido:
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>  
            <label>Telefono:
              <input
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label>Direccion:
              <input
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <button className='button' type='submit'>Confirmar</button>
          </form>
        </div>
      )
}

export default ContactForm