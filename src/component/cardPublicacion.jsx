import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function CardP({ title, estado }){
    return (
        <>
            <Card className='mt-2'>
                <Card.Header>{title}</Card.Header>
                <Card.Body className='row'>
                    <div className='col-10'>
                        <Card.Title>{estado ? 'Disponible' : 'Ocupado' }</Card.Title>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-danger'>Eliminar</button>
                    </div>
                </Card.Body>

            </Card>
        </>
    )
}

export default CardP;