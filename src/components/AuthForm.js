import { registerAPI } from "./Auth";
import {useState} from 'react';

function AuthForm ({heading, buttonName, children}) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ((prev) => ({
      ...prev,
      [name]: value
    }))
    console.log('formData =>', formData[name])
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    registerAPI(formData.email, formData.password)
  }
  return (
    <section  className="auth">
      <form  className="auth__form" onSubmit={handleSubmit}>
        <h2  className="auth__form-heading">{heading}</h2>
        <input  className="auth__form-input" name="email" onChange={handleChange} value={formData.email} placeholder="Email" type="email"></input>
        <input  className="auth__form-input" name="password" onChange={handleChange} value={formData.password} placeholder="Password" type="password"></input>
        <button className="auth__submit-button">{buttonName}</button>
        {children}
      </form>
    </section>
  )
}

export default AuthForm;