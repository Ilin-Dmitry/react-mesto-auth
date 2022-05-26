import Header from "./Header";
import AuthForm from './AuthForm';
import InfoTooltip from "./InfoTooltip";
import {Link, useHistory} from 'react-router-dom';
import {registerAPI} from './Auth';
import {useState, } from 'react';

function Register () {
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  function handleTooltipOpen () {
    console.log('сработало')
    setIsInfoTooltipOpen(true);
  }
  function handleTooltipClose () {
    setIsInfoTooltipOpen(false)
    history.push('/sign-in')
  }
  const history = useHistory();
  function handleRegistration (email, password) {
    registerAPI(email, password)
    .then((res) => {
      console.log('res from handleRegistration =>', res.data)

      if(res) {
         handleTooltipOpen()
      }
    })
  }
  return (
    <>
      <Header><Link to="/sign-in" className="header__link">Войти</Link></Header>
      <AuthForm heading="Регистрация" buttonName="Зарегистрироваться" onSubmit={handleRegistration}><Link to="sign-in" className="auth__link">Уже зарегистрированы? Войти</Link></AuthForm>
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={handleTooltipClose}/>
    </>

  )
}

export default Register;