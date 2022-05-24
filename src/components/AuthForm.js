function AuthForm ({heading, buttonName, children}) {

  return (
    <section  className="auth">
      <form  className="auth__form">
        <h2  className="auth__form-heading">{heading}</h2>
        <input  className="auth__form-input" placeholder="Email" type="email"></input>
        <input  className="auth__form-input" placeholder="Password" type="password"></input>
        <button className="auth__submit-button">{buttonName}</button>
        {children}
      </form>
    </section>
  )
}

export default AuthForm;