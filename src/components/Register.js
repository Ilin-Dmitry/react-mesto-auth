import Header from "./Header";
import AuthForm from './AuthForm';
import {Link, useHistory} from 'react-router-dom';
import {registerAPI} from './Auth';

function Register () {
  const history = useHistory();
  function handleRegistration (email, password) {
    registerAPI(email, password)
    .then((res) => {
      console.log('res from handleRegistration =>', res.data)
      if(res) {
        history.push('/sign-in')
      }
    })
  }
  return (
    <>
      <Header><Link to="/sign-in" className="header__link">Войти</Link></Header>
      <AuthForm heading="Регистрация" buttonName="Зарегистрироваться" onSubmit={handleRegistration}><Link to="sign-in" className="auth__link">Уже зарегистрированы? Войти</Link></AuthForm>
    </>

  )
}

export default Register;