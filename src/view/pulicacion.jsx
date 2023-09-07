import CardP from '../component/cardPublicacion';

function Publicacion() {
    const properties = [
        {
            id: 1,
            title: "Casa espaciosa en el centro",
            estado: false,
            description:
                "Hermosa casa con jardín y terraza en el centro de la ciudad.",
            price: "$250,000",
            type: "Venta",
            image:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-campo-paisajista-jesus-moraime-extremadura-jardin-alberca-1598526004.jpg?crop=1.00xw:0.760xh;0,0.186xh&resize=1200:*",
        },
        {
            id: 2,
            title: "Apartamento moderno",
            estado: true,
            description:
                "Moderno apartamento con excelente ubicación y vista panorámica.",
            price: "$1,200/mes",
            type: "Alquiler",
            image:
                "https://st4.depositphotos.com/1152281/40771/i/450/depositphotos_407716020-stock-photo-modern-living-room-in-blue.jpg",
        },
        // Agrega más propiedades aquí
    ];
    return (
        <>
            <div className='row'>
                <div className='col-2'>
                    
                </div>
                <div className='col-8'>
                    {properties.map((property) => (
                        <CardP key={property.id} title={property.title} estado={property.estado} />
                    ))}
                </div>
                <div className='col-2'>

                </div>
            </div>

        </>
    )
}

export default Publicacion