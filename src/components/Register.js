import Header from "./Header";
import AuthForm from './AuthForm';
import InfoTooltip from "./InfoTooltip";
import {Link} from 'react-router-dom';
import {registerAPI} from './Auth';
// import {useState, } from 'react';

function Register ({isInfoTooltipOpen, handleTooltipOpen, handleTooltipClose, handleRequestOk, handleRequestErr, isRequestSuccessful}) {


  function handleRegistration (email, password) {
    registerAPI(email, password)
    .then((res) => {
      return res
    })
    .then((res) => {
      if(res) {
        handleRequestOk()
        handleTooltipOpen()
      }
    })
    .catch((err) => {
      handleRequestErr()
      handleTooltipOpen()
    })
  }
  return (
    <>
      <Header><Link to="/sign-in" className="header__link">Войти</Link></Header>
      <AuthForm heading="Регистрация" buttonName="Зарегистрироваться" onSubmit={handleRegistration}><Link to="sign-in" className="auth__link">Уже зарегистрированы? Войти</Link></AuthForm>
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={handleTooltipClose} isSuccessful={isRequestSuccessful} />
    </>

  )
}

export default Register;