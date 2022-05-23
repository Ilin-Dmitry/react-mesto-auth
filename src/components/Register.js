import Header from "./Header";
import AuthForm from './AuthForm'

function Register () {
  return (
    <>
      <Header><p>Text</p></Header>
      <AuthForm heading="Регистрация" buttonName="Зарегистрироваться"><p style={{fontSize: '14px'}} className="auth__subtext">Уже зарегистрированы? Войти</p></AuthForm>
    </>

  )
}

export default Register;