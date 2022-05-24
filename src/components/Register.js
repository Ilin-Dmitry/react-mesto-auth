import Header from "./Header";
import AuthForm from './AuthForm';
import {Link} from 'react-router-dom';

function Register () {
  return (
    <>
      <Header><Link to="/sign-in" className="header__link">Войти</Link></Header>
      <AuthForm heading="Регистрация" buttonName="Зарегистрироваться"><Link to="sign-in" className="auth__link">Уже зарегистрированы? Войти</Link></AuthForm>
    </>

  )
}

export default Register;