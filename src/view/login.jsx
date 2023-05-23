import { useState } from 'react';
import axios from 'axios';
import '../style/login.css';

import imgCalles from '../img/calles2.jpg';

function login() {

  const [datos, setDatos] = useState({
    usuario: "",
    clave: ""
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("no enviar");
    } else {
      let res = await axios.post("http://localhost:9999/usuario/login", datos);
      console.log(res.data);
    }
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundImage: `url(${imgCalles})`,WebkitBackgroundSize: '100%' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius:'1rem'}}>
                <div className="card-body p-5 text-center">

                  <h3 className="mb-5">Inicio de sesion</h3>
                  <form>
                    <div className="form-outline mb-4">
                      <input type="email" id="typeEmailX-2" className="form-control" />
                      <label className="form-label" for="typeEmailX-2">Email</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="number" id="typeCuilX-2" className="form-control" />
                      <label className="form-label" for="typeEmailX-2">Cuil</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="typePasswordX-2" className="form-control" />
                      <label className="form-label" for="typePasswordX-2">Contraceña</label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                      <label className="form-check-label" for="form1Example3"> Remember password </label>
                    </div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default login

{/*< div className = "container-login" >
    <div className="card card-container-login">
      <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
      <p id="profile-name" className="profile-name-card"></p>
      <form onSubmit={handleSubmit} className="form-signin">
        <span id="reauth-email" className="reauth-email"></span>
        <input type="text" onChange={handleInputChange} value={datos.usuario} id="inputEmail" name="usuario" className="form-control" placeholder="Username" required />
        <input type="password" onChange={handleInputChange} value={datos.clave} id="inputPassword" name="clave" className="form-control" placeholder="Password" required />
        <div id="remember" className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
      </form>
      <a href="#" className="forgot-password">
        Forgot the password?
      </a>
    </div>
</div >*/}