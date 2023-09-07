import React, { useState, useRef } from "react";
import { Alert } from 'react-bootstrap';
// importando iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTriangleExclamation,
    faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

function inputFile(props) {
    const [imgSelect, setImgSelect] = useState("");
    const [alerta, setAlerta] = useState(null);
    const inputFile = useRef(null);

    const selectedFile = (e) => {
        const file = e.target.files[0];
        const maxSizeInBytes = 12582936; // Tamaño máximo permitido en bytes (1 MB)
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i; // Extensiones permitidas
        if (file == undefined) {
            setAlerta(<Alert variant="warning"><FontAwesomeIcon icon={faTriangleExclamation} /> Debe seleccionar una imagen</Alert>);
            inputFile.current.value = "";
        } else if (file.size > maxSizeInBytes) {
            setAlerta(<Alert variant="warning"><FontAwesomeIcon icon={faTriangleExclamation} /> El tamaño de la imagen excede el límite permitido de 12 MB.</Alert>);
        } else if (!allowedExtensions.test(file.name)) {
            setAlerta(<Alert variant="warning"><FontAwesomeIcon icon={faTriangleExclamation} /> Solo se permiten imagenes de tipo JPG, JPEG y PNG. </Alert>);
            inputFile.current.value = "";
        } else if (file && file.type.includes('image')) {
            console.log(file);
            setAlerta(<Alert variant="success"><FontAwesomeIcon icon={faCircleCheck} /> Imagen agregada</Alert>);
            setImgSelect(file);
        }
    }

    return (
        <>
            <div className="col-md-8 mb-4">
                <div className="form-outline">     
                <label className="form-label fw-bold" htmlFor="form3Example1q">{props.info}</label>
                    <input onChange={selectedFile} value={imgSelect} type="file" ref={inputFile} accept='image/*' className="form-control" />
                    <div>{alerta}</div>
                </div>
            </div>

        </>
    );
}
export default inputFile;