import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Blog</li>
              <li>Aviso legal</li>
              <li>Política de privacidad</li>
              <li>Política de cookies</li>
              <li>Trabaja con nosotros</li>
              <li>Contacto</li>
              <li>Libro de reclamos</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-md-11">
            <div className="copyright d-flex justify-content-center align-items-center" >
              &copy; {new Date().getFullYear()} Inmobidik. Todos los derechos reservados.
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
