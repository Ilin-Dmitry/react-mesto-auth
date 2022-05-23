function AuthForm ({heading, buttonName, children}) {
  const styleAuth = {
    textAlign: 'center',
  }
  const styleAuthForm = {
    paddingTop: 60
  }
  const styleAuthFormHeading = {
    fontSize: '24px',
    fontWeight: 900,
    marginBottom: '50px'
  }
  const styleInput = {
    boxSizing: 'border-box',
    display: 'block',
    margin: '0 auto 30px',
    width: '358px',
    background: 'none',
    color: 'rgba(204, 204, 204, 1)',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '1.21',
    border: 'none',
    borderBottom: '#ccc 2px solid'
  }
  const styleButton = {
    boxSizing: 'border-box',
    display: 'block',
    margin: '216px auto 0',
    width: '358px',
    height: '50px',
    borderRadius: '2px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '18px',
    lineHeight: '1.21',
    border: 'none'
  }
  return (
    <section style={styleAuth} className="auth">
      <form style={styleAuthForm} className="auth__form">
        <h2 style={styleAuthFormHeading} className="auth__form-heading">{heading}</h2>
        <input style={styleInput} className="auth__form-input" placeholder="Email"></input>
        <input style={styleInput} className="auth__form-input" placeholder="Password"></input>
        <button style={styleButton} className="auth__submit-button">{buttonName}</button>
        {children}
      </form>
    </section>
  )
}

export default AuthForm;