import Header from "./Header";
import AuthForm from './AuthForm';
import {Link, useHistory} from 'react-router-dom';
import {loginAPI} from './Auth';

function Login ({handleLoggedIn}) {
  const history = useHistory();
  function handleLogin (email, password) {
    loginAPI(email, password)
    .then((res) => {
      localStorage.setItem('token', res.token)
    })
    .then(() => {
      handleLoggedIn(email)
      history.push('/');
    })
  }
  return (
    <>
      <Header><Link to="/sign-up" className="header__link">Регистрация</Link></Header>
      <AuthForm heading="Вход" buttonName="Войти" onSubmit={handleLogin}></AuthForm>
    </>

  )
}

export default Login;