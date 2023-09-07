import React, { useState, useRef } from "react";
import '../class/Usuario';
import { Validaciones } from '../class/validaciones';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

function inputText({ info}) {
    const [texto, setTexto] = useState('');
    const [alerta, setAlerta] = useState(null);
    const inputText = useRef(null);

    const handleText = (e) => {
        var text = e.target.value;
        setTexto(texto);
        {/*
        var text = text.trim();
        if (text == "") {
            inputText.current.value = text;
        } else if (Validaciones.validarTexto(text)) {
            setAlerta(null);
            setTexto(text);
        } else if (Validaciones.validarTexto(text) != true) {
            setAlerta(<Alert variant="warning"><FontAwesomeIcon icon={faTriangleExclamation} /> Solo letras y ","</Alert>);
            inputText.current.value = text.slice(0, -1);
        }*/}
    }

    return (
        <>
            <div className="form-outline mb-4 col-md-8">
                <label className="form-label fw-bold" htmlFor="form3Example1q">{info}</label>
                <input type="text" value={texto} onChange={handleText} ref={inputText} className="form-control" required/>
                <div>{alerta}</div>
            </div>
        </>
    )
}

export default inputText;