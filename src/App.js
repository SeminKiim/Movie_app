import './App.css';
import PropTypes from 'prop-types';


function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cookingchew.com/wp-content/uploads/2020/05/What-Is-Kimchi-CO180-FE.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "coffee",
    image: "https://cdn.zmescience.com/wp-content/uploads/2018/04/Cappuccino_at_Sightglass_Coffee-1.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Bread",
    image: "https://www.thespruceeats.com/thmb/9n3YM4RVKSWyUWQ0JCl7BwHrl1U=/4288x2848/filters:fill(auto,1)/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg",
    rating: 5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}></Food>
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;
