import Header from "./Header";
import AuthForm from './AuthForm';
import {Link} from 'react-router-dom';

function Login () {
  return (
    <>
      <Header><Link to="/sign-up" className="header__link">Регистрация</Link></Header>
      <AuthForm heading="Вход" buttonName="Войти"></AuthForm>
    </>

  )
}

export default Login;