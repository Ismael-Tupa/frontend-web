import React, { useState } from 'react';
//import InputFuleImg from '../component/inputFileImg';
//import InputTxt from '../component/inputText';
//importamos las credenciales y los mudulos a utilizar
import firebaseApp from '../class/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { 
    getFirestore, 
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    getDoc,
    setDoc
} from 'firebase/firestore';
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

function registroLogin() {
    const [nombre, setNombre] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [cuil, setCuil] = useState(null);
    const [fechaNacimiento, setFechaNacimiento] = useState(null);
    const [direccion, setDireccion] = useState(null);
    const [imgFrontal, setImgFrontal] = useState(null);
    const [imgReverso, setImgReverso] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [celular, setCelular] = useState(null);
    const [whats, setWhats] = useState(null);
    const [cuenta, setCuenta] = useState(null);
    const [contrasena, setContrasena] = useState(null);

    const onSubmit = () => {
        console.log(
            nombre, 
            apellido, 
            cuil, 
            fechaNacimiento, 
            direccion, 
            imgFrontal, 
            imgReverso, 
            correo, 
            celular, 
            whats, 
            cuenta, 
            contrasena);
            registrarUsuario(cuenta, contrasena, nombre, apellido);
    };

    const registrarUsuario = async(email, password, nombre, apellido) => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        try {
            await setDoc(doc(db, 'usuarios', user.uid),{
                n: nombre,
                a: apellido
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#90EE90' }}>
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
                                            <label className="form-label fw-bold" htmlFor="form3Example1q">Nombre</label>
                                            <input type="text"  className="form-control" onChange={(e)=>{setNombre(e.target.value)}} />
                                        </div>
                                        <div className="form-outline mb-4 col-md-8">
                                            <label className="form-label fw-bold" htmlFor="form3Example1q">Apellido</label>
                                            <input type="text" className="form-control" onChange={(e)=>{setApellido(e.target.value)}} />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="form-outline">
                                                    <label className="form-label fw-bold" htmlFor="form3Example1w">Numero de cuil</label>
                                                    <input type="number" id="formCuil" className="form-control" onChange={(e)=>{setCuil(e.target.value)}} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label fw-bold">Fecha de nacimento</label>
                                                    <input type="date" className="form-control" id="formFechaNacimiento" onChange={(e)=>{setFechaNacimiento(e.target.value)}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4 col-md-8">
                                            <label className="form-label fw-bold" htmlFor="form3Example1q">Direccion</label>
                                            <input type="text" className="form-control" placeholder='Barrio/Localidad, calle, numero' onChange={(e)=>{setDireccion(e.target.value)}} />
                                        </div>

                                        <div className="col-md-8 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label fw-bold" htmlFor="form3Example1q">Captura frontal de dni</label>
                                                <input 
                                                    type="file" 
                                                    accept='image/*' 
                                                    className="form-control" 
                                                    onChange={(e)=>{
                                                        setImgFrontal(e.target.files[0])
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="col-md-8 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label fw-bold" htmlFor="form3Example1q">Captura del reverso del dni</label>
                                                <input 
                                                    type="file" 
                                                    accept='image/*' 
                                                    className="form-control" 
                                                    onChange={(e)=>{
                                                        setImgReverso(e.target.files[0])
                                                    }} />
                                            </div>
                                        </div>

                                        <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Contactos</h4>
                                        <div className="form-outline mb-4">
                                            <label className="form-label fw-bold" htmlFor="form3Example1q">Correo electronico</label>
                                            <input type="email" id="formCorreElectronico" className="form-control" onChange={(e)=>{setCorreo(e.target.value)}} />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label fw-bold" htmlFor="form3Example1q">Numero de celular</label>
                                            <input type="number" id="formNumeroCelular" className="form-control" onChange={(e)=>{setCelular(e.target.value)}} />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label fw-bold" htmlFor="form3Example1q">Numero de WhatsApp</label>
                                            <input type="number" id="formNumeroWhatsApp" className="form-control" onChange={(e)=>{setWhats(e.target.value)}} />
                                        </div>
                                        <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Nueva Cuenta</h4>
                                        <div className="col-md-9 mb-3">
                                            <div className="form-outline">
                                                <label className="form-label fw-bold" htmlFor="form3Example1w">Cuenta</label>
                                                <input type="email" id="formCuenta" className="form-control" onChange={(e)=>{setCuenta(e.target.value)}} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-outline">
                                                <label className="form-label fw-bold" htmlFor="form3Example1w">Contraseña</label>
                                                <input type="password" id="formContraseña" className="form-control" onChange={(e)=>{setContrasena(e.target.value)}} />
                                            </div>
                                        </div>
                                        <button type="button" onClick={onSubmit} className="btn btn-primary btn-lg mb-1">Enviar</button>
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