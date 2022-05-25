import Header from "./Header";
import AuthForm from './AuthForm';
import {Link} from 'react-router-dom';
import {loginAPI} from './Auth';

function Login () {
  return (
    <>
      <Header><Link to="/sign-up" className="header__link">Регистрация</Link></Header>
      <AuthForm heading="Вход" buttonName="Войти" onSubmit={loginAPI}></AuthForm>
    </>

  )
}

export default Login;