import Header from "./Header";
import AuthForm from './AuthForm';
import {Link, useHistory} from 'react-router-dom';
import {loginAPI} from './Auth';
import InfoTooltip from "./InfoTooltip";

function Login ({handleLoggedIn, isInfoTooltipOpen, handleTooltipClose, isRequestSuccessful, handleRequestErr, handleTooltipOpen}) {
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
    .catch(() => {
      handleRequestErr()
      handleTooltipOpen()
    })
  }
  return (
    <>
      <Header><Link to="/sign-up" className="header__link">Регистрация</Link></Header>
      <AuthForm heading="Вход" buttonName="Войти" onSubmit={handleLogin}></AuthForm>
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={handleTooltipClose} isSuccessful={isRequestSuccessful} />
    </>

  )
}

export default Login;