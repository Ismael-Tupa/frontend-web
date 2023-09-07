import "../style/home.css";
import PropertyCard from "../component/cards";

const HomePage = () => {
  const properties = [
    {
      id: 1,
      title: "Casa espaciosa en el centro",
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
    <div className="home-page">
      <h1 className="titulo d-flex justify-content-center align-items-center">Bienvenido a la inmobiliaria</h1>
      <h2 className="titulo d-flex justify-content-center align-items-center">Propiedades destacadas</h2>
      <div className="property-list">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="additional-div">Departamentos recomendados en Venta</div>
          </div>
          <div className="col-md-4">
            <div className="additional-div">Casas recomendadas</div>
          </div>
          <div className="col-md-4">
            <div className="additional-div">Departamentos recomendados en Alquiler</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;