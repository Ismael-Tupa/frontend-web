import PropTypes from "prop-types";

const PropertyCard = ({ property }) => {
  return (
    <div className="p-4">
      <div className="card property-card col p-4">
        <div className="image-container">
          <img src={property.image} alt={property.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text">{property.description}</p>
          <p className="card-text">{property.price}</p>
          <button className="card-text">{property.type}</button>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;