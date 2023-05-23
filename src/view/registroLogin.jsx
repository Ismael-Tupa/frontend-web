function registroLogin() {
    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#00FF7F' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-xl-8">
                            <div className="card rounded-3">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                    className="w-100" style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                                    alt="Sample photo"></img>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registro de usuarios</h3>

                                    <form className="px-md-2">
                                        <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Datos personales</h4>
                                        <div className="form-outline mb-4 col-md-8">
                                            <label className="form-label" for="form3Example1q">Nombre</label>
                                            <input type="text" id="form3Example1q" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4 col-md-8">
                                            <label className="form-label" for="form3Example1q">Apellido</label>
                                            <input type="text" id="form3Example1q" className="form-control" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="form-outline">
                                                    <label className="form-label" for="form3Example1w">Numero de cuil</label>
                                                    <input type="number" id="form3Example1w" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-outline datepicker">
                                                    <label for="exampleDatepicker1" className="form-label">Fecha de nacimento</label>
                                                    <input type="date" className="form-control" id="exampleDatepicker1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4 col-md-8">
                                            <label className="form-label" for="form3Example1q">Direccion</label>
                                            <input type="text" id="form3Example1q" className="form-control" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 mb-4">
                                                <div className="form-outline">
                                                    <input type="file" id="form3Example1q" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="form-outline">
                                                    <button type="button" className="btn btn-primary">upload</button>
                                                </div>
                                            </div>

                                        </div>
                                        <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Contactos</h4>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example1q">Correo electronico</label>
                                            <input type="email" id="form3Example1q" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example1q">Numero de celular</label>
                                            <input type="number" id="form3Example1q" className="form-control" />
                                        </div>
                                        <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Nueva Cuenta</h4>
                                        <div className="col-md-9 mb-3">
                                            <div className="form-outline">
                                                <label className="form-label" for="form3Example1w">Cuenta</label>
                                                <input type="email" id="form3Example1w" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-outline">
                                                <label className="form-label" for="form3Example1w">Contraseña</label>
                                                <input type="password" id="form3Example1w" className="form-control" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg mb-1">Enviar</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default registroLogin;