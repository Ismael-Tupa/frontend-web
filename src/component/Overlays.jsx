import React from 'react';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
//para los iconos
import imgUser from '../img/user.png';
//para las rutas
import {Link, Route, Routes} from 'react-router-dom';

function Overlays(props) {
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Usuarios`}</Popover.Header>
              <Popover.Body>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={imgUser} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example 
                    </Card.Text>
                    <Link className='btn btn-primary' to='/inicioLogin'>Iniciar Sesion</Link>{' '}
                    <Link className='btn btn-primary' to='/registroLogin'>Registo</Link>
                  </Card.Body>
                </Card> 
              </Popover.Body>
            </Popover>
          }
        >
          <Button className='nav-link' variant="secondary">{props.icono}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default Overlays;